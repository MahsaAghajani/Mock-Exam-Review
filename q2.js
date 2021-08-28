/* Question 2
 *
 *  Implement the functions defined below
 *
 */

// Meant to be used by median. Do not alter.
const round = function(number) {
  return Math.round(number * 100) / 100;
};

/* ===========================================================================
 * MEDIAN - the middle number of a list (when sorted)
 *        - if the list length is even, then the median is the average of the two middle values
 *        - use the provided 'round' function before returning your value
 *
 * For example:
 *
 *    median([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    4
 */


const median = function(arr) {
  arr = arr.sort((a, b) => a- b);

  const arrLength = arr.length;
  let median = 0;

  if(arrLength % 2 === 0){
    const middleIndex = arrLength / 2;
    median = round(arr[middleIndex] + arr[middleIndex - 1]) / 2
  }
  else{
    const middleIndex = Math.round(arrLength / 2) 
    median = arr[middleIndex - 1] 
  }

  return median;
};

// Don't change below:
module.exports = { median };
