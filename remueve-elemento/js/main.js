/**
 * Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.
 * Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:
 * Change the array nums such that the first k elements of nums contain the elements which are not equal to val.
 * The remaining elements of nums are not important as well as the size of nums.
 * Return k.
 */

const nums = [3, 2, 2, 3, 4, 5, 6, 7, 8, 9, 3, 3, 3];
const val = 3;
const k = removeElements(nums, val);

function removeElements(nums, val) {
    // Initialize the count of non-val elements to 0
    let k = 0;
    
    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
      // If the current element is not equal to val, increment the count and swap it with the element at the beginning of the non-val section
      if (nums[i] !== val) {
          nums[k] = nums[i];
        k++;
      }
    }
    
    // Return the count of non-val elements
    return k;
}