/**
 * @param {number[]} nums
 * @return {void}
 */

var ArrayWrapper = function(nums) {
    this.nums = nums;
};

ArrayWrapper.prototype.valueOf = function() {
    return this.nums.reduce((sum, num) => sum + num, 0);
};

ArrayWrapper.prototype.toString = function() {
    return `[${this.nums.join(',')}]`;
};

// Example usage
var obj1 = new ArrayWrapper([1, 2]);
var obj2 = new ArrayWrapper([3, 4]);
console.log(obj1 + obj2); // 10

var obj3 = new ArrayWrapper([5, 6, 7]);
console.log(String(obj3)); 
