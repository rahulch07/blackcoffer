const Data = require('../models/dataModel');

exports.getData = async (req, res) => {
  try {
    const data = await Data.find();
    //console.log(data);
    res.json(data);
    
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
