/**
 * Converts milliseconds to a formatted date string
 * @param {number} milliseconds
 * @returns {string}
 */
function millisecondsToDate(milliseconds) {
    if (isNaN(milliseconds) || milliseconds < 0) {
        throw new Error("Invalid milliseconds");
    }
    return new Date(milliseconds).toLocaleString();
}

/**
 * Converts seconds to a formatted date string
 * @param {number} seconds
 * @returns {string}
 */
function secondsToDate(seconds) {
    return millisecondsToDate(seconds * 1000);
}

/**
 * Converts ISO date string to milliseconds
 * @param {string} isoString
 * @returns {number}
 */
function isoToMilliseconds(isoString) {
    const date = new Date(isoString);
    if (isNaN(date.getTime())) {
        throw new Error("Invalid ISO Date/Time string");
    }
    return date.getTime();
}


/**
 * Converts a date/time string to an object containing milliseconds and seconds.
 * @param {string} dateString - The date/time string.
 * @returns {Object} - An object with milliseconds and seconds.
 */
function dateStringToEpochObject(dateString) {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
        throw new Error("Invalid date string");
    }
    return {
        milliseconds: date.getTime(),
        seconds: Math.floor(date.getTime() / 1000),
    };
}

/**
 * Converts epoch time (milliseconds) to a date object.
 * @param {number} epoch - The epoch time in milliseconds.
 * @returns {Object} - An object with the formatted date and time.
 */
function epochToDateObject(epoch) {
    const date = new Date(epoch);
    if (isNaN(date.getTime())) {
        throw new Error("Invalid epoch time");
    }
    return {
        date: date.toDateString(),
        time: date.toLocaleTimeString(),
    };
}

module.exports = { millisecondsToDate, secondsToDate, isoToMilliseconds, dateStringToEpochObject, epochToDateObject };
