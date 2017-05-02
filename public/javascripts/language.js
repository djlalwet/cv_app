var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var languageSchema = new Schema({
  name: String,
  type: String,
  yearsOfExp: Number,
  skillLevel: String,
  imagePath: String
});

// the schema is useless so far
// we need to create a model using it
var Language = mongoose.model('Language', languageSchema);

// make this available to our users in our Node applications
module.exports = Language;