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

/ * */;

console.log('Days of 1970: ', daysBetween('01/01/1970', 'December 31, 1970'));
console.log('Days of 2018: ', daysBetween('01/01/2018', 'March 1, 2018'));
