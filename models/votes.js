const mongoose = require('mongoose');

const VotesSchema = mongoose.Schema({
  candidate: String,
  value: String,
  achievement: String,
  timestamp: Date
});

const Votes = mongoose.model('votes',
VotesSchema);
module.exports = Votes;