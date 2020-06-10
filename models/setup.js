const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const feedingSessionSchema = new Schema({
  date: Date,
  lengthOfSession: Number,
  createdBy: ObjectId,
  setUp: ObjectId, 
  perOral: String,
  aspiration: { type: Boolean, default: false}, 
  volume: Number,
  exploredFoods: { 
    type: String,
    enum: ['No Exporing', 'Visually', 'Fingers', 'Hands', 'Face', 'Lips', 'Tongue', 'Mouth']
  },
  description: String

}, { timestamps:true});

const setupSchema = new Schema({
  patientName: String,
  seating: Boolean,
  createdBy: ObjectId,
  foodPrep: Boolean,
  transition: Boolean, 
  tools: Boolean,
  comments: String,
  feedingSessions: [ feedingSessionSchema],
  
}, {
  timestamps: true
});

module.exports = mongoose.model('Setup', setupSchema);