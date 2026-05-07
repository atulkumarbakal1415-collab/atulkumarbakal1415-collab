/**
 * Validates incoming moisture data
 * @param {number} moisturePercentage 
 * @returns {string|null} Error message or null if valid
 */
const validateMoistureData = (moisturePercentage) => {
  if (moisturePercentage === undefined || moisturePercentage === null) {
    return 'Moisture percentage is required';
  }
  
  if (typeof moisturePercentage !== 'number') {
    return 'Moisture percentage must be a number';
  }

  if (moisturePercentage < 0 || moisturePercentage > 100) {
    return 'Moisture percentage must be between 0 and 100';
  }

  return null; // Valid
};

module.exports = {
  validateMoistureData
};
