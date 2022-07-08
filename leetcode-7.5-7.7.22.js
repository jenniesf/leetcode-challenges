    // REVERSE WORDS IN A STRING III
var reverseWords = function(s) {
    
    let str = s.split(' ')
    let rstr = []

    console.log(str)
    for ( let i = 0 ; i < str.length ;i++) {
        let x = str[i].split('').reverse().join('')
        rstr.push(x)
    }
    return rstr.join(' ')

};
console.log( reverseWords( "God Ding" )  )



// Detect Capital
var detectCapitalUse = function(word) {

    if( word.toUpperCase() === word ||  
        word.toLowerCase() === word || 
        word[0].toUpperCase() + word.slice(1).toLowerCase() === word ) {
        return true
    } else {
        return false
    }

};

console.log(   detectCapitalUse( 'USA' )  )


// REVERSE STRING - in place
var reverseString = function(s) {
    return s.reverse()
}
    OR
var reverseString = function(s) {

    let i = 0  
    let j = s.length-1  

    while( i < j ) {
        let temp = s[i]
        s[i] = s[j]
        s[j] = temp
        i++
        j--
    }
}
console.log(reverseString( ["h","e","l","l","o"]  ) )