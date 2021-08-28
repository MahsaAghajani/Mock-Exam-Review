/* Question 3
 *
 *  Implement the 'mode' function defined below
 *
 * MODE - the most frequently occurring number
 *      - for this test, the provided lists will only have a single value for the mode
 *
 * For example:
 *
 *    mode([6,2,3,4,9,6,1,0,5]);
 *         [0,0,1,1,0,2,0,0,0]
 *
 * Returns:
 *
 *    6
 */

// {
//     6 : 2,
//     2 : 1,

// }
const mode = function(arr) {
    const frequency = {}
    for(const item of arr){
        if(frequency[item] === undefined){
            frequency[item] = 1
        }
        else{
            frequency[item] += 1
        }
    }

    const mode = {value: 0, key : 0}
    for(const key in frequency){
            if(frequency[key] > mode.value){
                mode.value = frequency[key]
                mode.key = key
            }
    }

    return mode.key;
};

// Don't change below:
module.exports = { mode };
