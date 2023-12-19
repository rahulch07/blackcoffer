const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
  paragraph : { type: String},
});

const DataLog = mongoose.model('dataLog', logSchema);

module.exports = DataLog;