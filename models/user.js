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
const reviewSchema = new Schema({
    userName: String, 
    content: String,
    rating: {
      type:Number,
      min: 1,
      max: 5,
      default: 5
    }
  }, { timestamps:true});

const userSchema = new Schema({
  name: String,
  email: String,
  avatarURL: String,
  patientInfo: [patientSchema],
  reviews: [reviewSchema],
  setup: [{type: Schema.Types.ObjectId, ref: 'Setup'}],
  note: [{type: Schema.Types.ObjectId, ref: 'Note'}],
  googleId: String
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);