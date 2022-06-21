// Single Number

var singleNumber = function(nums) {  
    nums.sort()
    for ( let i = 0 ; i < nums.length ;i++){
        if ( nums[i] == nums[i+1] ) {
            i = i + 1
        } else {
            return nums[i]
        }
    }
}

console.log( singleNumber( [2,2,1] )) 