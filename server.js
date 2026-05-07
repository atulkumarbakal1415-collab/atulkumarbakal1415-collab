require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const moistureRoutes = require('./routes/moistureRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors()); // Allow cross-origin requests (e.g., from frontend)
app.use(express.json()); // Parse incoming JSON payloads

// Routes
app.use('/api/moisture', moistureRoutes);

// Root Endpoint
app.get('/', (req, res) => {
  res.send('AGROBOT API is running...');
});

// Global Error Handler Middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
