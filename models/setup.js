const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const feedingSessionSchema = new Schema({
  date: Date,
  lengthOfSession: Number,
//  createdBy: ObjectId,
 // setUp: ObjectId, s
  foods: String,
  liquids: String,
  aspiration: { type: Boolean, default: false}, 
  volume: String,
  exploration: { 
    type: String,
    enum: ['None', 'Visual', 'Fingers', 'Hands', 'Face', 'Lips', 'Tongue']
  },
  summary: String

}, { timestamps:true});

const setupSchema = new Schema({
  date: Date,
  patientName: String,
  seating: Boolean,
//  createdBy: ObjectId,
  foodPrep: Boolean,
  transition: Boolean, 
  tools: Boolean,
  comments: String,
  feedingSessions: [ feedingSessionSchema],
  
}, {
  timestamps: true
});

module.exports = mongoose.model('Setup', setupSchema);