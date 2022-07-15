//. Find All Anagrams in a String

var findAnagrams = function(str, p) {
   // set variables
  let [start, end, count, result, map] = [0,0,0,[],new Map()];
 
   // create and set map of p elements and set to 0 if does not have, if have, add 1 (looking for duplicates)
  for ( let i = 0; i < p.length ; i++) {
      // if map doesn thave it, create/set to 0
      if ( !map.has( p[i] ) ) {
         map.set( p[i] , 0 )
       }
      // set from 0 to 1 and check for duplicates, set it to  +1
      map.set( p[i] ,  map.get( p[i] ) +1 )
   }
   count = map.size    //3

   while ( end < str.length ) {      // 0   10
       let char = str[end]                // char = each letter of the string
       
       if (  map.has(char) )  {     // check map for c   -- has return boolean
               map.set( char,  map.get(char)-1 )    // if map has that char, decrement by 1     c: 0
               if ( map.get(char)  === 0 ) {
                   count--                             // count = 2
               }
       }
       
       while( count === 0 ) {
              char = str[start]
           
               if ( ( end - start + 1)   === p.length) {
                   result.push(start)
               }
           
               if (map.has(char)) {
                   if( map.get(char) === 0) {
                       count++
                   }
                   map.set( char, map.get(char)+1 )
               }
               start++
           
       }
       end++
       
   }
   return result
}





// 496. Next Greater Element I
var nextGreaterElement = function(nums1, nums2) {
    let output = []
    // iterate through nums1 to find matching number in nums2
    // if found, iterate through nums2 going forward to find next greater digit
    // if not found, input -1
    
    for (let i = 0 ; i < nums1.length ; i++) {
        for (let j = 0 ; j < nums2.length ; j++) {     //4
           
                // if found a match
                if ( nums1[i] === nums2[j] ) {
                      let num2Placement = j           //2
                      let found = false
                       // check if there is a larger number    2  <  4 
                      while ( num2Placement < nums2.length ) {
                            if ( nums1[i] < nums2[num2Placement] ) {
                                output.push( nums2[num2Placement] )
                                found = true
                                break;
                            } 
                            num2Placement++
                    } 
                    if (!found) {
                        output.push( -1 )
                    }
                    
                } 
        }
    }
    return output
};
