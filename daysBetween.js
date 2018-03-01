/* Date - number of milliseconds since:
  1970-01-01
  yyyy-mm-dd
  
*/

function daysBetween(start, end) {
  return (
    (Date.parse(end) - Data.parse(start)) /
    (1000 * 60 * 60 * 24)
  ).toString();
}
