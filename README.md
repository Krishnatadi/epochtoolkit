# epochtoolkit
`epochToolkit` is a comprehensive toolkit for managing dates, times, and epoch conversions in JavaScript. It provides a suite of utilities to convert between date strings and epoch times, format dates and times, validate date strings, and check for leap years. With this toolkit, you can simplify date and time management in your JavaScript projects.


## Table of Contents

* [Installation](#installation)
* [Quick Start](#quick-start)
* [Features](#features)
* [Methods Overview](#methods-overview)
* [Usage](#usage)



## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).
Node.js 0.10 or higher is required.

If this is a brand new project, make sure to create a `package.json` first with
the [`npm init` command](https://docs.npmjs.com/creating-a-package-json-file).

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

To install `saltyhash`, use npm:
```console
$ npm install epochtoolkit
```


## Quick Start
```javascript
const epochToolkit = require('epochtoolkit');

// Convert a date string to epoch time
const epoch = epochToolkit.dateStringToEpochObject('2024-11-01T12:44:33');
console.log("Epoch from Date String:", epoch);

// Check if 2024 is a leap year
console.log("Is 2024 a Leap Year:", epochToolkit.isLeapYear(2024));
```



## Features

- **Date Conversion**: Convert dates to and from epoch formats (milliseconds and seconds) and ISO date formats.
- **Date Formatting**: Display dates in a readable format (`YYYY-MM-DD` and `HH:MM:SS`).
- **Validation**: Check for valid timestamps and ISO date strings.
- **Leap Year Check**: Determine if a specified year is a leap year.
- **Modular & User-Friendly**: Easy to use, plug-and-play design, adaptable to any project.


## Methods Overview

The Epoch Toolkit provides various functions to manipulate and convert dates and timestamps in JavaScript. Below is a comprehensive overview of its methods, including descriptions and practical examples.

| Method                                     | Description                                                                                  | Example                                                  |
|--------------------------------------------|----------------------------------------------------------------------------------------------|----------------------------------------------------------|
| `dateStringToEpochObject(dateString)`     | Converts a date string in ISO 8601 format to an epoch object containing milliseconds and seconds. | `epochObject = epochToolkit.dateStringToEpochObject('2024-11-01T12:44:33');` <br> Output: `{ milliseconds: 1730445273000, seconds: 1730445273 }` |
| `millisecondsToDate(milliseconds)`         | Converts a timestamp in milliseconds to a formatted date string.                            | `formattedDateFromMilliseconds = epochToolkit.millisecondsToDate(1730445273627);` <br> Output: `"11/1/2024, 12:44:33 PM"` |
| `secondsToDate(seconds)`                   | Converts a timestamp in seconds to a formatted date string.                                 | `formattedDateFromSeconds = epochToolkit.secondsToDate(1730445273);` <br> Output: `"11/1/2024, 12:44:33 PM"` |
| `isoToMilliseconds(isoDateString)`        | Converts an ISO date string to a timestamp in milliseconds.                                 | `millisecondsFromISO = epochToolkit.isoToMilliseconds('2024-11-01T12:44:33Z');` <br> Output: `1730445273000` |
| `formatDate(date)`                         | Formats a given date object into a string representation of the date.                       | `formattedDate = epochToolkit.formatDate(new Date());` <br> Output: `"2024-11-01"` |
| `formatTime(date)`                         | Formats a given date object into a string representation of the time.                       | `formattedTime = epochToolkit.formatTime(new Date());` <br> Output: `"12:44:33"` |
| `isValidTimestamp(timestamp)`              | Validates whether the given timestamp is a valid epoch timestamp.                           | `isValidTimestamp = epochToolkit.isValidTimestamp(1730445273000);` <br> Output: `true` |
| `isValidISODateString(isoDateString)`    | Checks if the provided string is a valid ISO date string.                                   | `isValidISODate = epochToolkit.isValidISODateString('2024-11-01T12:44:33Z');` <br> Output: `true` |
| `isLeapYear(year)`                        | Determines whether the specified year is a leap year.                                       | `isLeap = epochToolkit.isLeapYear(2024);` <br> Output: `true` <br> `isLeap1900 = epochToolkit.isLeapYear(1900);` <br> Output: `false` <br> `isLeap2000 = epochToolkit.isLeapYear(2000);` <br> Output: `true` |


## Usage

To use the Epoch Toolkit, ensure you have it installed in your project. You can require it in your JavaScript files and utilize the above methods for various date and time manipulations.

### Conversion Functions
#### 1. dateStringToEpochObject(dateString)
Converts a date string (e.g., YYYY-MM-DDTHH:mm:ss) into an object containing both the epoch time in milliseconds and in seconds. This is useful for converting human-readable date formats into epoch time, which is commonly used in databases and system logs.
```javascript
const epochObject = epochToolkit.dateStringToEpochObject('2024-11-01T12:44:33');
console.log("Epoch Object from Date String:", epochObject); 
// Output: { milliseconds: 1730445273000, seconds: 1730445273 }
```

#### 2. millisecondsToDate(milliseconds)
Converts an epoch time in milliseconds to a formatted date string. Use this when you need to display epoch time as a readable date.
```javascript
const formattedDateFromMilliseconds = epochToolkit.millisecondsToDate(1730445273627);
console.log("Formatted Date from Milliseconds:", formattedDateFromMilliseconds); 
// Output: "11/1/2024, 12:44:33 PM"
```


#### 3. secondsToDate(seconds)
Converts epoch time in seconds to a formatted date string. This is helpful when dealing with epoch time in seconds instead of milliseconds.
```javascript
const formattedDateFromSeconds = epochToolkit.secondsToDate(1730445273);
console.log("Formatted Date from Seconds:", formattedDateFromSeconds); 
// Output: "11/1/2024, 12:44:33 PM"
```


#### 4. isoToMilliseconds(isoString)
Converts an ISO date string (e.g., 2024-11-01T12:44:33Z) to epoch time in milliseconds. This is useful when working with ISO date formats and needing to convert them to epoch time.
```javascript
const millisecondsFromISO = epochToolkit.isoToMilliseconds('2024-11-01T12:44:33Z');
console.log("Milliseconds from ISO Date String:", millisecondsFromISO); 
// Output: 1730445273000
```



### Formatting Functions
#### 1. formatDate(date)
Formats a Date object as a YYYY-MM-DD string. Use this to display dates in a standard format.
```javascript
const formattedDate = epochToolkit.formatDate(new Date());
console.log("Formatted Date:", formattedDate); 
// Output: e.g., "2024-11-01"
```


#### 2. formatTime(date)
Formats a Date object as a HH:MM:SS string. Useful when you need to display the time portion of a date.
```javascript
const formattedTime = epochToolkit.formatTime(new Date());
console.log("Formatted Time:", formattedTime); 
// Output: e.g., "12:44:33"
```


### Validation Functions

#### 1. isValidTimestamp(timestamp)
Checks if a given number represents a valid epoch timestamp. Useful to verify that a value is a valid timestamp before further processing.
```javascript
const isValidTimestamp = epochToolkit.isValidTimestamp(1730445273000);
console.log("Is Valid Timestamp:", isValidTimestamp); 
// Output: true
```


#### 2. isValidISODateString(isoString)
Verifies if a string follows a valid ISO date format. Helpful for validating input from users or external sources.
```javascript
const isValidISODate = epochToolkit.isValidISODateString('2024-11-01T12:44:33Z');
console.log("Is Valid ISO Date String:", isValidISODate); 
// Output: true
```


### Leap Year Check
`isLeapYear(year)` Determines if a specified year is a leap year. This is useful for applications with calendar functionality.
```javascript
console.log("Is 2024 a Leap Year:", epochToolkit.isLeapYear(2024)); 
// Output: true

console.log("Is 1900 a Leap Year:", epochToolkit.isLeapYear(1900)); 
// Output: false

console.log("Is 2000 a Leap Year:", epochToolkit.isLeapYear(2000)); 
// Output: true
```



## Error Handliing
To help manage errors, epochToolkit includes built-in validation functions:
- **Invalid ISO Date Strings**: The `isValidISODateString` function will return `false` for any improperly formatted strings, ensuring that only valid ISO date formats are processed.
  
- **Invalid Timestamps**: The `isValidTimestamp` function checks that the numbers provided as timestamps are valid, returning `false` for any invalid inputs.

```javascript
const validDate = epochToolkit.isValidISODateString('invalid-date');
console.log(validDate); 
// Output: false
```


## Contributing
If you're interested in improving or adding features to `epochToolkit`, we are always happy to welcome contributions!


## Contact
For questions, suggestions, or support, please reach out to [Your Contact Email] or open an issue on GitHub.

