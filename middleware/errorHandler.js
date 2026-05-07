/**
 * Global Error Handler Middleware
 * Catches errors thrown in controllers and formats them as JSON
 */
const errorHandler = (err, req, res, next) => {
  // If status code is 200, default to 500 (Internal Server Error)
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  res.status(statusCode);

  res.json({
    success: false,
    message: err.message,
    // Only show stack trace in development mode
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};

module.exports = errorHandler;
