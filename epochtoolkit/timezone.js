/**
 * Converts a given date to a specified timezone.
 * @param {Date} date - The original date.
 * @param {string} timezone - The target timezone (e.g., 'America/New_York').
 * @returns {Date} - The new date in the specified timezone.
 */
function convertToTimezone(date, timezone) {
    return new Date(date.toLocaleString('en-US', { timeZone: timezone }));
}

module.exports = { convertToTimezone };
