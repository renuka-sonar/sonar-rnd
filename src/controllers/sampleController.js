const sampleModel = require('../models/sampleModel'); 

exports.getSampleData = (req, res) => { const data = sampleModel.getData(); res.json(data); };

