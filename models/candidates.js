const mongoose = require('mongoose');

const candidatesSchema = mongoose.Schema({
  name: String,
  profile_photo: String
});

const Candidates = mongoose.model('candidates',
candidatesSchema);
module.exports = Candidates;