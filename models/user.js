const mongoose = require('mongoose');
const Schema = mongoose.Schema;
/*
The factSchema is used to embedded docs in as student doc.
There is no model and no 'facts' collection
*/
const patientSchema = new Schema ({
    name: String,
    ageYear: Number,
    ageMonth: Number,
    birthdate: Date,
    allergies: String,
    diagnoses: String,
    history: String,
    concerns: String
});


const userSchema = new Schema({
  name: String,
  email: String,
  avatarURL: String,
  patientInfo: [patientSchema],
  setup: [{type: Schema.Types.ObjectId, ref: 'Setup'}],
  note: [{type: Schema.Types.ObjectId, ref: 'Note'}],
  googleId: String
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);