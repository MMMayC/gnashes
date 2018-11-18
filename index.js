const express = require("express");
const app = express();
const template = require("./views/template");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
//SSR function import
const server = require("./views/server");

// Serving static files
app.use("/public", express.static(path.resolve(__dirname, "public")));

// Body-parser configuration
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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
    votes: null,
    gnashes: null
  }
}

// server rendered home page
app.get(["/", "/result"], (req, res) => {
  const { preloadedState, content}  = server(initialState, req.url)
  const response = template(preloadedState, content)
  res.setHeader("Cache-Control", "public, max-age=604800")
  res.send(response);
});

app.post("/vote", (req, res) => {
  const vote = req.body;
  Votes.create(vote, (err, votes) => {
    if(err){
      console.log("Post vote: ", err);
    }
    res.json(votes);
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
  Votes.aggregate([
    {$match: {timestamp: {$gte: new Date(req.query.from), $lte: new Date(req.query.to)}}}
  ], (err, votes) => {
    if(err) {
      throw(err);
    }
    res.json(votes);
  })
});

app.get("/gnashes", (req, res) => {
  Votes.aggregate([
    {$match: {timestamp: {$gte: new Date(req.query.from), $lte: new Date(req.query.to)}}},
    {$group: {_id: "$candidate", numOfVotes: {$sum: 1}}},
    {$sort: {numOfVotes: -1}},
    {$limit: 1}
  ], (err, gnashes) => {
    if(err) {
      throw(err);
    }
    res.json(gnashes);
  })
});

