    // PALINDROME NUMBER
var isPalindrome = function(x) {
    
    let str = x.toString().split('')
    return str.reverse().join('') == x ? true : false
}


