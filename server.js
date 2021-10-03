const express = require("express");
const bodyParser = require("body-parser");
const mongodb = require("mongodb");
const mongodbSanitize = require('mongodb-sanitize');
var ObjectId = require("mongodb").ObjectId;
const app = express();

// defaut form actions
// or GET requests
app.use(express.urlencoded({ extended: true }));

app.use(mongodbSanitize());

// DB SETUP
const uri = "mongodb+srv://19kmunz:S0nOzOXBAuYOcDxl@cluster0.xpfgv.mongodb.net";

const client = new mongodb.MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
let collection = null;

client
.connect()
.then(() => {
  // will only create collection if it doesn't exist
  return client.db("a3").collection("pets");
})
.then(__collection => {
  // store reference to collection
  collection = __collection;
});

// GET - get current db state of pet gallery
app.get("/get", (request, response) => {
  if (request.hasOwnProperty("session")) {
    getAllUserPets(request, response);
  }
});

const getAllUserPets = function(request, response) {
  collection
  .find({ user: ObjectId("6148b6813e52f8cadd08544d") }) //automatically login to test test account
  .toArray()
  .then(result => response.json(result));
};

// create and update calls - i should split them up but i wont <3
app.post("/createOrUpdatePet", bodyParser.json(), (request, response) => {
  console.log(request.body);
  let obj = request.body;
  if (obj.name !== "" && obj.link !== "" && obj.type !== "") {
    obj.call = decideCall(obj.type);
    if (obj.hasOwnProperty("_id")) {
      // if it has an id than it is an update request
      updatePet(request, response, obj);
    } else {
      // if no id, add to data base
      createPet(request, response, obj);
    }
  } else {
    //if invalid input, jsut return current state
    getAllUserPets(request, response);
  }
});

const decideCall = function(type) {
  let flip = Math.random();
  let call;
  switch (type) {
    case "Dog":
      call = flip > 0.5 ? "ARF" : "WOOF";
      break;
    case "Cat":
      call = flip > 0.5 ? "MEOW" : "PURR";
      break;
    case "Snake":
      call = flip > 0.5 ? "TSSS" : "SSSWEET";
      break;
    case "Bird":
      call = flip > 0.5 ? "TWEET" : "CHIRP";
      break;
    default:
      call = flip > 0.5 ? "HEWWO" : "I LOVE YOU";
  }
  return call;
};

// update query
const updatePet = function(request, response, obj) {
  collection.updateOne(
      { _id: ObjectId(obj._id) },
      {
        $set: {
          name: obj.name,
          link: obj.link,
          type: obj.type,
          call: obj.call
        }
      },
      function(err, ress) {
        if (err) getAllUserPetsError(request, response, "There was an error updating your pet! Try Again later.");
        getAllUserPets(request, response);
      }
  );
};

// create query
const createPet = function(request, response, obj) {
  obj.user = ObjectId("6148b6813e52f8cadd08544d"); // auto login to test test user
  collection.insertOne(obj, function(err, ress) {
    if (err) getAllUserPetsError(request, response, "There was an error creating your new pet! Try Again later.");
    getAllUserPets(request, response);
  });
};

// DELETE
app.post("/delete", bodyParser.json(), (request, response) => {
  console.log("Delete: " + request.body);
  let idObj = request.body;
  console.log(idObj);
  collection.deleteOne({ _id: ObjectId(idObj.id) }, function(err, ress) {
    if (err) getAllUserPetsError(request, response, "There was an error deleting your pet! Try Again later.");
    getAllUserPets(request, response);
  });
});

// Express setup
app.use(express.static("./build/"));

// Listen!!!
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
