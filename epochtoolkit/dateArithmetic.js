/**
 * Adds a specified number of days to a given date.
 * @param {Date} date - The original date.
 * @param {number} days - The number of days to add.
 * @returns {Date} - The new date after addition.
 */
function addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

/**
 * Subtracts a specified number of days from a given date.
 * @param {Date} date - The original date.
 * @param {number} days - The number of days to subtract.
 * @returns {Date} - The new date after subtraction.
 */
function subtractDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() - days);
    return result;
}

module.exports = { addDays, subtractDays };
