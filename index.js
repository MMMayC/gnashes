const express = require("express");
const app = express();
const template = require("./views/template");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require('body-parser')

// Serving static files
app.use("/public", express.static(path.resolve(__dirname, "public")));
// app.use("/media", express.static(path.resolve(__dirname, "media")));
app.use(bodyParser.json());
// hide powered by express
// app.disable("x-powered-by");
// start the server
app.listen(process.env.PORT || 3000);

// database setup

mongoose.connect("mongodb://localhost:27017/gnashes", { useNewUrlParser: true });

Candidates = require("./models/candidates");
Votes = require("./models/votes");

// our apps data model
//const candidates = require("./data/candidates.json");
//const votes = require("./data/votes.json");

// const candidates = Candidates.find((err, allCandidates) => {
//   if(err) {
//     throw err;
//   }
//   return allCandidates;
// });

// const votes = Votes.find((err, allVotes) => {
//   if(err) {
//     throw err;
//   }
//   return allVotes;
// })

let initialState = {
  candidates: {
    candidates: null,
    currentCandidate: null
  },
  votes: {
    isFetching: false,
    votes: null
  }
}

//SSR function import
const server = require("./views/server");

// server rendered home page
app.get("/", (req, res) => {
  const { preloadedState, content}  = server(initialState, req.url)
  const response = template(preloadedState, content)
  res.setHeader("Cache-Control", "public, max-age=604800")
  res.send(response);
});


app.post("/vote", (req, res) => {
  var vote = req.body;
  Votes.create(vote);
});

app.get("/candidates", (req, res) => {
  Candidates.find((err, candidates) => {
    if(err) {
      throw(err);
    }
    res.json(candidates);
  })
});