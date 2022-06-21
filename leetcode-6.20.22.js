// CLIMBING STAIRS
var climbStairs = function(n) {
 
    let nums = [1,2]
    for ( let i = 3 ; i < n ; i++) {
        nums.push( nums[0] + nums[1] )
        nums.shift()
    }
    return nums[1] + nums[0]
    
}

console.log( climbStairs(4))