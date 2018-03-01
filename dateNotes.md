# System Time

* Time - the temporal relationship between two events.
* System Time - represents a computers notion of the passing of time.
* NOTE - Many inconsistencies and differences exist between operating systems + browsers.

  * Unix + POSIX: 1 January 1970 00:00:00 UT
  * Windows: 1 January 1601 00:00:00 UT (Gregorian Calendar)

* Javascript Date Object
  * The `Date.parse()` method parses a string representation of a date, and returns the number of milliseconds since `January 1, 1970, 00:00:00 UTC` or `NaN` if the string is unrecognized.
  * Long Format: `Year-Month-Day Hours:Minutes:Seconds`
  * Short Format: `YYYY-MM-DD` || ``DD-MM-YYYY`
