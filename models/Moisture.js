const mongoose = require('mongoose');

const moistureSchema = new mongoose.Schema({
  moisturePercentage: {
    type: Number,
    required: [true, 'Please add a moisture percentage'],
    min: 0,
    max: 100
  },
  deviceId: {
    type: String,
    required: [true, 'Please provide the device ID'],
    default: 'ESP8266_01'
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

// Create and export the model
module.exports = mongoose.model('Moisture', moistureSchema);
