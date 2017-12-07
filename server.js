var express = require("express");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;

var USERS_COLLECTION = "users";
var SHOUTOUTS_COLLECTION = "shoutouts";

var app = express();
app.use(bodyParser.json());

// Create link to Angular build directory
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// Create a database variable outside of the database connection callback to
// reuse the connection pool in your app.
var db;
var mongoUri;
var mongoPort;
var prefix;
// Connect to the database before starting the application server.
var myArgs = process.argv.slice(2);

if (myArgs[0] === 'local') {
  mongoUri = 'mongodb://127.0.0.1:27017/munch';
  mongoPort = '8080';
  prefix = '/api'
} else {
  mongoUri = process.env.MONGODB_URI;
  mongoPort = process.env.PORT;
  prefix = '/api';
}

mongodb.MongoClient.connect(mongoUri, function (err, database) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  // Save database object from the callback for reuse.
  db = database;
  console.log("Database connection ready");

  // Initialize the app.
  var server = app.listen(mongoPort || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
});

// USER API ROUTES BELOW

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

/*  "/api/users"
 *    GET: finds all users
 *    POST: creates a new user
 */
app.get('/', function(req, res) {
  res.sendFile(path.join(distDir + 'index.html'));
});

app.get(prefix + "/users", function(req, res) {
  db.collection(USERS_COLLECTION).find({}).toArray(function(err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get users.");
    } else {
      res.status(200).json(docs);
    }
  });
});

app.post(prefix + "/users", function(req, res) {
  var newUser = req.body;
  newUser.createDate = new Date();
  // if (!req.body.userName || req.body.firstName || req.body.lastName ||
  //   !req.body.password || !req.body.email || !req.body.phone) {
  //   handleError(res, "Invalid user input", "Fill All Required Fields", 400);
  // }
  // TODO: Check for uniqueness in credentials
  db.collection(USERS_COLLECTION).insertOne(newUser, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to create new contact.");
    } else {
      res.status(201).json(doc.ops[0]);
    }
  });
});

/*  "/api/users/:id"
 *    GET: find contact by id
 *    PUT: update contact by id
 *    DELETE: deletes contact by id
 */

app.get(prefix + "/users/:id", function(req, res) {
  db.collection(USERS_COLLECTION).findOne({ _id: new ObjectID(req.params.id) },
    function(err, doc) {
      if (err) {
        handleError(res, err.message, "Failed to get contact");
      } else {
        res.status(200).json(doc);
      }
  });
});

app.put(prefix + "/users/:id", function(req, res) {
  var updateDoc = req.body;
  delete updateDoc._id;

  db.collection(USERS_COLLECTION).updateOne({_id: new ObjectID(req.params.id)},
    updateDoc,
    function(err, doc) {
      if (err) {
        handleError(res, err.message, "Failed to update contact");
      } else {
        updateDoc._id = req.params.id;
        res.status(200).json(updateDoc);
      }
  });
});

app.delete(prefix + "/users/:id", function(req, res) {
  db.collection(USERS_COLLECTION).deleteOne({_id: new ObjectID(req.params.id)},
    function(err, result) {
      if (err) {
        handleError(res, err.message, "Failed to delete contact");
      } else {
        res.status(200).json(req.params.id);
      }
  });
});

app.get(prefix + "/shoutouts", function(req, res) {
  db.collection(SHOUTOUTS_COLLECTION).find({}).toArray(function(err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get users.");
    } else {
      res.status(200).json(docs);
    }
  });
});

app.get(prefix + "/shoutouts/:id", function(req, res) {
  db.collection(SHOUTOUTS_COLLECTION).findOne({ _id: new ObjectID(req.params.id) },
    function(err, doc) {
      if (err) {
        handleError(res, err.message, "Failed to get contact");
      } else {
        res.status(200).json(doc);
      }
    });
});
