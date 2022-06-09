// ROMAN TO INTEGER
let romans = {
    'I' : 1,
    'V' : 5,
    'X' : 10,
    'L' : 50,
    'C' : 100,
    'D' : 500,
    'M' : 1000,
    'IV': 4,
    'IX': 9,
    'XL': 40,
    'XC': 90,
    'CD': 400,
    'CM': 900
}
    
var romanToInt = function(s) {

    let sroman = ['CM', 'CD', 'XC', 'XL', 'IX', 'IV']

    let arr = []
    
    for ( let i = 0 ; i < s.length ; i+=0 ) {

        if ( sroman.includes( s[i] + s[i+1] ) ) {
            arr.push(    romans[ s[i] + s[i+1] ]  )
            i+=2

        } else {
            arr.push( romans[ s[i] ] )
            i++
        }
    }
    return arr.reduce( (acc,c) => acc + c,0)

}