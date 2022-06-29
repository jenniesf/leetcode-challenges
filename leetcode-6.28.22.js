    // MERGE SORTED ARRAY
    function merge (nums1, m, nums2, n) {
        // remove zeros and add in nums2 array
        nums1.splice( -n, n , ...nums2 )
        // sort -w.o using SORT()
        for ( let i = 0 ; i < nums1.length ; i++) {
            for (let j = i+1 ; j < nums1.length; j++) {
                if ( nums1[i] > nums1[j]) {
                    temp = nums1[i]
                    nums1[i] = nums1[j]
                    nums1[j] = temp
                } 
            }
    
        }
        return nums1
    }
    console.log(  merge(    [1,2,3,0,0,0], 3, [2,5,6] , 3     ))
    