const express = require('express'),
          app = express(),
     template = require('./views/template')
         path = require('path');


// Serving static files
app.use('/public', express.static(path.resolve(__dirname, 'public')));
app.use('/media', express.static(path.resolve(__dirname, 'media')));

// hide powered by express
app.disable('x-powered-by');
// start the server
app.listen(process.env.PORT || 3000);

// our apps data model
const candidates = require('./data/candidates.json');
const votes = require("./data/votes.json");

let initialState = {
  candidates: {
    isFetching: false,
    candidates: candidates,
    currentCandidate: null
  },
  votes: {
    isFetching: false,
    votes: votes
  }
}

//SSR function import
const server = require('./views/server');

// server rendered home page
app.get('/*', (req, res) => {
  const { preloadedState, content}  = server(initialState, req.url)
  const response = template(preloadedState, content)
  res.setHeader('Cache-Control', 'public, max-age=604800')
  res.send(response);
});
