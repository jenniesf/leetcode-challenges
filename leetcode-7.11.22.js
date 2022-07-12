const arr = [ 2, 3, 1, 5, 3, 1, 4, -4, -3, -2]
const sum = 10

const threeSum = (arr = [], sum) => {
   arr.sort((a,b) => a - b);
   const res = [];

   for(let i=0; i < arr.length - 2; i++){
      if(arr[i] != arr[i-1]){
         let left = i + 1;
         let right = arr.length - 1;
         while (left < right){
            const curr = arr[i] + arr[left] + arr[right];
            if (curr === sum){
               res.push([arr[i], arr[left], arr[right]]);
               while(arr[left] == arr[left + 1]) left ++
               while(arr[right] == arr[right - 1]) right -- 
              
               left ++;
               right --;
            } else if(curr < sum) {
               left ++
            } else if(curr > sum){
               right --
            };
         };
      };
   };
   return res
   
};
console.log(threeSum(arr, sum));