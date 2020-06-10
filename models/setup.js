const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const feedingSessionSchema = new Schema({
  date: Date,
  lengthOfSession: Number,
  createdBy: ObjectId,
  setUp: ObjectId, 
  perOral: String,
  aspiration: Boolean,
  volume: Number,
  exploredFoods: Boolean,
  description: String

}, { timestamps:true});

const setUpSchema = new Schema({
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

module.exports = mongoose.model('setUp', setUpSchema);