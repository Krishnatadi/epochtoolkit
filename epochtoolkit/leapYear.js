/**
 * Checks if a given year is a leap year.
 * @param {number} year - The year to check.
 * @returns {boolean} - True if the year is a leap year, false otherwise.
 */
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

module.exports = { isLeapYear };
