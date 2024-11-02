/**
 * Formats a date to 'YYYY-MM-DD' format.
 * @param {Date} date - The date to format.
 * @returns {string} - The formatted date string.
 */
function formatDate(date) {
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
}

/**
 * Formats a date to 'HH:MM:SS' format.
 * @param {Date} date - The date to format.
 * @returns {string} - The formatted time string.
 */
function formatTime(date) {
    const hh = String(date.getHours()).padStart(2, '0');
    const mm = String(date.getMinutes()).padStart(2, '0');
    const ss = String(date.getSeconds()).padStart(2, '0');
    return `${hh}:${mm}:${ss}`;
}

/**
 * Formats a date to a custom string format.
 * @param {Date} date - The date to format.
 * @param {string} format - The format string (e.g., 'DD-MM-YYYY').
 * @returns {string} - The formatted date string.
 */
function formatDateToCustomString(date, format) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return format.replace('DD', day).replace('MM', month).replace('YYYY', year);
}

module.exports = { formatDate, formatTime, formatDateToCustomString };
