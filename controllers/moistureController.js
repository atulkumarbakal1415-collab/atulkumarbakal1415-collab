const Moisture = require('../models/Moisture');
const { validateMoistureData } = require('../utils/validators');

/**
 * @desc    Receive moisture data from ESP8266
 * @route   POST /api/moisture
 */
const addMoistureData = async (req, res, next) => {
  try {
    const { moisturePercentage, deviceId } = req.body;

    // Validate incoming data
    const validationError = validateMoistureData(moisturePercentage);
    if (validationError) {
      res.status(400);
      throw new Error(validationError);
    }

    // Create new moisture record
    const record = await Moisture.create({
      moisturePercentage,
      deviceId: deviceId || 'ESP8266_01'
    });

    res.status(201).json({
      success: true,
      data: record
    });
  } catch (error) {
    next(error); // Pass error to global error handler
  }
};

/**
 * @desc    Get the latest moisture reading
 * @route   GET /api/moisture/latest
 */
const getLatestMoisture = async (req, res, next) => {
  try {
    // Sort by timestamp descending to get the newest record first
    const latest = await Moisture.findOne().sort({ timestamp: -1 });

    if (!latest) {
      return res.status(404).json({ success: false, message: 'No moisture data found' });
    }

    res.status(200).json({
      success: true,
      data: latest
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Get weekly moisture report data (last 7 days grouped by date)
 * @route   GET /api/moisture/weekly
 */
const getWeeklyReport = async (req, res, next) => {
  try {
    // Calculate the date 7 days ago
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    // MongoDB Aggregation Pipeline
    const report = await Moisture.aggregate([
      {
        // 1. Filter documents from the last 7 days
        $match: {
          timestamp: { $gte: sevenDaysAgo }
        }
      },
      {
        // 2. Group by date (ignoring time) and calculate average moisture
        $group: {
          _id: {
            $dateToString: { format: "%Y-%m-%d", date: "$timestamp" }
          },
          averageMoisture: { $avg: "$moisturePercentage" },
          count: { $sum: 1 }
        }
      },
      {
        // 3. Sort by date ascending (oldest to newest within the 7 days)
        $sort: { _id: 1 }
      }
    ]);

    res.status(200).json({
      success: true,
      data: report
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addMoistureData,
  getLatestMoisture,
  getWeeklyReport
};
