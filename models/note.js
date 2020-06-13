const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const setupSchema = new Schema;

const noteSchema = new Schema({
    date: Number,
    setups: [ setupSchema], 
    comments: String},
    {timestamps: true });

module.exports = mongoose.model('Note', noteSchema);
