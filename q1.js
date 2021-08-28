/* Question 1
 *
 *  Implement the functions defined below
 *
 */

/* ===========================================================================
 * MIN - the lowest value in a list
 *
 * For example:
 *
 *    min([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    0
 */

const min = function(arr) {
//  // O(n * log(n))
//  [1, 10, 5, 6]
//   const sortedArray = arr.sort((a, b) => a - b) 
// //   1, 10 => 1 - 10 < 0  => nothing => 1, 10, 5, 6
// //   10, 5 => 10 - 5 > 0 => 5, 10  => 1,5,10, 6
// //   10, 6 => 10 -6 > 0 => 6, 10  => 1,5,6,10
//   return sortedArray[0]

  // O(n)
  let min = arr[0]
  for(const item of arr){
        min = min > item ? item : min
        // if(min > item)
        // {
        //     min = item
        // }
  }
  return min;

};


/* ===========================================================================
 * MAX - the highest value in a list
 *
 * For example:
 *
 *    max([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */
const max = function(arr) {
    let max = arr[0]
    for(const item of arr){
        max = item > max ? item : max;
    }
    return max;
};

/* ===========================================================================
 * RANGE - the difference between the highest and lowest values in a list
 *
 * For example:
 *
 *    range([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */
const range = function(arr) {
//  return max(arr) - min(arr)
const sortedArray = arr.sort((a,b) => a - b);
return sortedArray[sortedArray.length - 1] - sortedArray[0];
};

// Don't change below:

module.exports = { min, max, range };
