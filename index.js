const express = require("express");
const app = express();
const template = require("./views/template");
const path = require("path");
const mongoose = require("mongoose");

// Serving static files
app.use("/public", express.static(path.resolve(__dirname, "public")));

// start the server
app.listen(process.env.PORT || 3000);

// database setup
mongoose.connect("mongodb://localhost:27017/gnashes", { useNewUrlParser: true });

Candidates = require("./models/candidates");
Votes = require("./models/votes");

let initialState = {
  candidates: {
    candidates: null,
    currentCandidate: null
  },
  votes: {
    votes: null
  }
}

//SSR function import
const server = require("./views/server");

// server rendered home page
app.get(["/", "/result"], (req, res) => {
  const { preloadedState, content}  = server(initialState, req.url)
  const response = template(preloadedState, content)
  res.setHeader("Cache-Control", "public, max-age=604800")
  res.send(response);
});

app.post("/vote", (req, res) => {
  var vote = req.body;
  Votes.create(vote).catch(err => {
    throw(err);
  });
});

app.get("/candidates", (req, res) => {
  Candidates.find((err, candidates) => {
    if(err) {
      throw(err);
    }
    res.json(candidates);
  })
});

app.get("/votes", (req, res) => {
  Votes.find((err, votes) => {
    if(err) {
      throw(err);
    }
    res.json(votes);
  })
});