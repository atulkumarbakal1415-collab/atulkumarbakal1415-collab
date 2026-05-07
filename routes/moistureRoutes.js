const express = require('express');
const router = express.Router();
const {
  addMoistureData,
  getLatestMoisture,
  getWeeklyReport
} = require('../controllers/moistureController');

// Route for adding new moisture data from ESP8266
router.post('/', addMoistureData);

// Route for getting the single latest reading (for dashboard live view)
router.get('/latest', getLatestMoisture);

// Route for getting the 7-day average report (for dashboard charts)
router.get('/weekly', getWeeklyReport);

module.exports = router;
