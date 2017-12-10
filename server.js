var express = require("express");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;

var USERS_COLLECTION = "users";
var SHOUTOUTS_COLLECTION = "shoutouts";

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

// Create link to Angular build directory
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

app.get('/', home);
app.get("/api/users", getUsers);
app.get("/api/shoutouts", getShoutouts);
app.get("/api/users/:id", getUser);
app.get("/api/shoutouts/:id", getShoutout);
app.put("/api/users/:id", updateUser);
app.post("/api/users", createUser);
app.post("/api/users/auth", authenticate);
app.delete("/api/users/:id", deleteUser);
// Create a database variable outside of the database connection callback to
// reuse the connection pool in your app.
var db;
var mongoUri;
var mongoPort;
// Connect to the database before starting the application server.
var myArgs = process.argv.slice(2);

if (myArgs[0] === 'local') {
  mongoUri = 'mongodb://127.0.0.1:27017/munch';
  mongoPort = '8080';
} else {
  mongoUri = process.env.MONGODB_URI;
  mongoPort = process.env.PORT;
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

// API FUNCTIONS BELOW

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

function home(req, res) {
    res.sendFile(path.join(distDir + 'index.html'));
}

function authenticate(req, res) {
  let username = req.body.userName;
  let password = req.body.password.toString();
  db.collection(USERS_COLLECTION).findOne({userName: username},
    function (err, user) {
      if (err) {
        handleError(res, "Failed to Auth",  err.message, 500);
      } else if (!user) {
        handleError(res, "Username or Password incorrect.");
      } else if (user.password === password) {
        res.send(user);
      }
    });
}
function getUsers(req, res) {
  db.collection(USERS_COLLECTION).find({}).toArray(function (err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get users.");
    } else {
      res.status(200).json(docs);
    }
  });
}

function createUser(req, res) {
  var newUser = req.body;
  newUser.createDate = new Date();
  // TODO: Check for uniqueness in credentials
  db.collection(USERS_COLLECTION).insertOne(newUser, function (err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to create new contact.");
    } else {
      res.status(201).json(doc.ops[0]);
    }
  });
}

function getUser(req, res) {
  db.collection(USERS_COLLECTION).findOne({ _id: new ObjectID(req.params.id) },
    function(err, doc) {
      if (err) {
        handleError(res, err.message, "Failed to get contact");
      } else {
        res.status(200).json(doc);
      }
  });
}

function updateUser(req, res) {
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
}

function deleteUser(req, res) {
  db.collection(USERS_COLLECTION).deleteOne({_id: new ObjectID(req.params.id)},
    function(err, result) {
      if (err) {
        handleError(res, err.message, "Failed to delete contact");
      } else {
        res.status(200).json(req.params.id);
      }
  });
}

function getShoutouts(req, res) {
  db.collection(SHOUTOUTS_COLLECTION).find({}).toArray(function(err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get users.");
    } else {
      res.status(200).json(docs);
    }
  });
}

function getShoutout(req, res) {
  db.collection(SHOUTOUTS_COLLECTION).findOne({ _id: new ObjectID(req.params.id) },
    function(err, doc) {
      if (err) {
        handleError(res, err.message, "Failed to get contact");
      } else {
        res.status(200).json(doc);
      }
    });
}
