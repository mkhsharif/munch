'use strict';

const express = require("express");
const bodyParser = require("body-parser");
const mongodb = require("mongodb");
const ObjectID = mongodb.ObjectID;
const app = express();
const path = require('path');
const schedule = require('node-schedule');
app.use(bodyParser.json());
// to support URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Create a database variable outside of the database connection callback to
// reuse the connection pool in your app.
var db;
var mongoUri;
var mongoPort;
var io;
var globalSocket;

// Create link to Angular build directory
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

var CRON_SECONDS = 30000;

// MONGO COLLECTION DEFINITIONS
var USERS_COLLECTION = "users";
var SHOUTOUTS_COLLECTION = "shoutout_ids";
var REQUESTS_COLLECTION = "requests";
var SESSIONS_COLLECTION = "sessions";
var INTERESTS_COLLECTION = "interests";

// USER API FUNCTIONS
app.get("/api/users", getUsers);
app.get("/api/users/:id", getUser);
app.put("/api/users/:id", updateUser);
app.post("/api/users", createUser);
app.delete("/api/users/:id", deleteUser);

// SHOUTOUT API FUNCTIONS
app.get("/api/shoutout_ids", getShoutouts);
app.get("/api/shoutout_ids/:id", getShoutout);
app.put("/api/shoutout_ids/:id", updateShoutout);
app.post("/api/shoutout_ids", createShoutout);

// REQUEST API FUNCTIONS
app.get("/api/requests", getRequests);
app.get("/api/requests/:id", getRequest);
app.post("/api/requests", createRequest);
app.put("/api/requests/cron/:id", cronRequest);
app.put("/api/requests/:id", updateRequest);

// AUTH API FUNCTIONS
app.post("/api/users/auth", authenticate);

// SESSION API FUNCTIONS
app.get("/api/sessions", getSessions);
app.get("/api/sessions/:id", getSession);
app.post("/api/sessions", createSession);
app.put("/api/sessions/:id", updateSession);

// INTEREST API FUNCTIONS
app.get("/api/interests", getInterests);
app.get("/api/interests/:id", getInterest);
app.post("/api/interests", createInterest);
app.put("/api/interests/:id", updateInterest);



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
  var appServer = app.listen(mongoPort || 8080, function () {
    var port = appServer.address().port;
    appServer.listen(process.env.PORT);
    console.log("App now running on port", port);
  });
  io = require('socket.io')(appServer);
  io.on('connection', onConnect);
});

// BASE SOCKET.IO FUNCTION
function onConnect(socket) {
  console.log('Client connected');
  globalSocket = socket;
  socket.on('disconnect', disconnect);
  socket.on('save-message', saveMessage);
  socket.on('create-match', createMatch);
  socket.on('end-session', endSession);
  socket.on('activate-session', activateSession);
}

// SOCKET.IO FUNCTION DEFINITIONS BELOW
function disconnect() {
  console.log('Client disconnected');
}

function saveMessage (data) {
  console.log(data);
  io.emit('new-message', { message: data });
}

function createMatch (data) {
  console.log(data);
  globalSocket.emit('new-match', data);
}

function endSession (data) {
  console.log(data);
  globalSocket.emit('user_id-exit', data);
}

function activateSession (data) {
  console.log(data);
  console.log('Session activate socket received');
  globalSocket.emit('session-activated', data);
}
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
  const username = req.body.userName;
  const password = req.body.password.toString();
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

// USER API FUNCTION DEFINITIONS
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

// SHOUTOUT API FUNCTION DEFINITIONS
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

function createShoutout(req, res) {
  var newRequest = req.body;
  newRequest.createDate = new Date();
  // TODO: Check for uniqueness in credentials
  db.collection(SHOUTOUTS_COLLECTION).insertOne(newRequest, function (err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to create new shoutout.");
    } else {
      res.status(201).json(doc.ops[0]);
    }
  });
}

function updateShoutout(req, res) {
  var updateDoc = req.body;
  delete updateDoc._id;

  db.collection(SHOUTOUTS_COLLECTION).updateOne({_id: new ObjectID(req.params.id)},
    updateDoc,
    function(err, doc) {
      if (err) {
        handleError(res, err.message, "Failed to update shoutout");
      } else {
        updateDoc._id = req.params.id;
        res.status(200).json(updateDoc);
      }
    });
}

// REQUEST API FUNCTION DEFINITIONS
function createRequest(req, res) {
  var newRequest = req.body;
  newRequest.createDate = new Date();
  // TODO: Check for uniqueness in credentials
  return db.collection(REQUESTS_COLLECTION).insertOne(newRequest)
    .then(function (doc) {
      res.status(201).json(doc.ops[0]);
    }).catch(function (err) {
      handleError(res, err.message, "Failed to create new request");
    });
}

function cronRequest(req, res) {
  schedule.scheduleJob(Date.now() + CRON_SECONDS, function (fireDate) {
    console.log('This job was supposed to run at ' + fireDate + ', but actually ran at ' + new Date());
    var updateDoc = req.body;
    console.log(req.params.id);
    console.log(updateDoc._id);
    delete updateDoc._id;
    updateDoc.cron = false;
    updateDoc.pending = false;
    return db.collection(REQUESTS_COLLECTION).findOne({ _id: new ObjectID(req.params.id)})
      .then(function() {
        console.log("Retrieved request " + req.params.id + "to remove");
        return db.collection(REQUESTS_COLLECTION).updateOne({_id: new ObjectID(req.params.id)}, updateDoc);
      }).then(function() {
        console.log("Cron and Pending marked false for " + req.params.id );
      }).catch(function (err) {
        handleError(res, err.message, "Failed to create new request");
      });
  });
}

function getRequest(req, res) {
  db.collection(REQUESTS_COLLECTION).findOne({ _id: new ObjectID(req.params.id)})
    .then(function (doc) {
      res.status(200).json(doc);
    })
    .catch(function (err) {
      handleError(res, err.message, "Failed to get request");
    });
}

function getRequests(req, res) {
  db.collection(REQUESTS_COLLECTION).find({}).toArray(function(err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get requests.");
    } else {
      res.status(200).json(docs);
    }
  });
}

function updateRequest(req, res) {
  var updateDoc = req.body;
  delete updateDoc._id;

  db.collection(REQUESTS_COLLECTION).updateOne({_id: new ObjectID(req.params.id)},
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

// SESSION API FUNCTION DEFINITIONS
function createSession(req, res) {
  var newSession = req.body;
  newSession.createDate = new Date();
  // TODO: Check for uniqueness in credentials
  db.collection(SESSIONS_COLLECTION).insertOne(newSession, function (err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to create new session.");
    } else {
      res.status(201).json(doc.ops[0]);
    }
  });
}

function getSession(req, res) {
  db.collection(SESSIONS_COLLECTION).findOne({ _id: new ObjectID(req.params.id) },
    function(err, doc) {
      if (err) {
        handleError(res, err.message, "Failed to get session");
      } else {
        res.status(200).json(doc);
      }
    });
}

function getSessions(req, res) {
  db.collection(SESSIONS_COLLECTION).find({}).toArray(function(err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get sessions.");
    } else {
      res.status(200).json(docs);
    }
  });
}

function updateSession(req, res) {
  var updateDoc = req.body;
  delete updateDoc._id;

  db.collection(SESSIONS_COLLECTION).updateOne({_id: new ObjectID(req.params.id)},
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

// INTEREST API FUNCTION DEFINITIONS
function createInterest(req, res) {
  var newInterest = req.body;
  newInterest.createDate = new Date();
  // TODO: Check for uniqueness in credentials
  db.collection(INTERESTS_COLLECTION).insertOne(newSession, function (err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to create new interest.");
    } else {
      res.status(201).json(doc.ops[0]);
    }
  });
}

function getInterest(req, res) {
  db.collection(INTERESTS_COLLECTION).findOne({ _id: new ObjectID(req.params.id) },
    function(err, doc) {
      if (err) {
        handleError(res, err.message, "Failed to get interest");
      } else {
        res.status(200).json(doc);
      }
    });
}

function getInterests(req, res) {
  db.collection(INTERESTS_COLLECTION).find({}).toArray(function(err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get interests.");
    } else {
      res.status(200).json(docs);
    }
  });
}

function updateInterest(req, res) {
  var updateDoc = req.body;
  delete updateDoc._id;

  db.collection(INTERESTS_COLLECTION).updateOne({_id: new ObjectID(req.params.id)},
    updateDoc,
    function(err, doc) {
      if (err) {
        handleError(res, err.message, "Failed to update interest");
      } else {
        updateDoc._id = req.params.id;
        res.status(200).json(updateDoc);
      }
    });
}

