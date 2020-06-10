const mongoose = require('mongoose');
const Schema = mongoose.Schema;
/*
The factSchema is used to embedded docs in as student doc.
There is no model and no 'facts' collection
*/
const patientsSchema = new Schema ({
    name: String,
    age: Number,
    birthdate: Number,
    allergies: String,
    diagnoses: String
});


const userSchema = new Schema({
  name: String,
  email: String,
  avatarURL: String,
  patientNames: [ ],
  googleId: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Student', studentSchema);