/**
 * Compares two dates.
 * @param {Date} date1 - The first date.
 * @param {Date} date2 - The second date.
 * @returns {number} - Returns 1 if date1 > date2, -1 if date1 < date2, and 0 if they are equal.
 */
function compareDates(date1, date2) {
    return date1.getTime() - date2.getTime();
}

module.exports = { compareDates };
