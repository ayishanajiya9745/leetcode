/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const truevalues=[];
    for(i=0;i<arr.length;i++)
    {
        if(fn(arr[i],i))
        {
            truevalues.push(arr[i]);
        }
    }
    return truevalues;
    
};