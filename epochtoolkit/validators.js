/**
 * Validates if a number is a valid timestamp.
 * @param {number} timestamp - The timestamp to validate.
 * @returns {boolean} - True if valid, false otherwise.
 */
function isValidTimestamp(timestamp) {
    return typeof timestamp === 'number' && timestamp > 0;
}

/**
 * Validates if a string is a valid ISO date string.
 * @param {string} isoString - The ISO string to validate.
 * @returns {boolean} - True if valid, false otherwise.
 */
function isValidISODateString(isoString) {
    return !isNaN(new Date(isoString).getTime());
}

module.exports = { isValidTimestamp, isValidISODateString };
