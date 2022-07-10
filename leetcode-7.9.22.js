var sortArrayByParity = function(nums) {
    let j = 0
    
    for ( let i = 0 ; i < nums.length; i++) {
        // if odd
        if ( nums[j] % 2 == 1 ) {
            nums.push( nums[j] )
            nums.splice( j, 1 )
        // if even
        } else if ( nums[j] % 2 == 0 ) {
           j++
        }
      }
       return nums
   };
   