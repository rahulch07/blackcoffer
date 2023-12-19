const Log = require('../models/logModel');

exports.getLog = async (req, res) => {
  try {
    const data = await Log.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};