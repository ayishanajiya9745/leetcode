/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let num3 = [...nums1, ...nums2];
    let sorted = num3.sort((a, b) => a - b);
    let len = sorted.length;
    let mid = Math.floor(len / 2);
    if (len % 2 === 0) {
        return (sorted[mid - 1] + sorted[mid]) / 2;
    } 
    else {
        return sorted[mid];
    }
};