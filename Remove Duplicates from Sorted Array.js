/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    sorted=nums.sort((a,b)=>a-b);
    if(sorted.lengh===0){
        return 0;
    }
    let i=0;
    for(j=1;j<sorted.length;j++){
        if(sorted[i]!==sorted[j]){
            i++;
            sorted[i]=sorted[j];
        }
    }
    return i+1;

    
};