const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema({
    setups: [ setupSchema], 
    comments: String},
    {timestamps: true });

module.exports = mongoose.model('Note', noteSchema);
