/* Question 0
 *
 *  Implement the functions defined below
 *
 */

/* ===========================================================================
 * COUNT - the number of items in a list
 *
 * For example:
 *
 *    count([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    9
 */
const count = function(arr) {
  const length = arr != null ? arr.length : 0;
  // condition ? executeIfTrue : extecueIfFalse 
  return length;
};

/* ===========================================================================
 * SUM - the sum of the numbers in a list
       - safe to assume that all items are numbers already
 *
 * For example:
 *
 *    sum([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    36
 */
const sum = function(arr) {
  // let total = 0
  // for(const item of arr){
  //   total += item
  // }
  // return total;

  let total = 0;
  arr.forEach(element => {
    total += element;
  });
  return total;
};

// To be used by mean. Do not alter.
const round = function(number) {
  return Math.round(number * 100) / 100;
};

/* ===========================================================================
 * MEAN - the average value of numbers in a list
 *      - use the provided 'round' function when returning your value
 *      - if empty array, return null to indicate that mean cannot be calculated
 *
 * For example:
 *
 *    mean([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    4
 */
const mean = function(arr) {
 // get the sum of the array => sum()
 // devide that by number of elements in the array => count()
 const sumOfArray = sum(arr);
 const numberOfArrayElements = count(arr)
 return round(sumOfArray / numberOfArrayElements);
//  return round(sum(arr) / count(arr))
};

// Don't change below:
module.exports = { count, sum, mean };
