
// 682. Baseball Game

var calPoints = function(ops) {
   
    let operations = [ '+' , 'D' , 'C']
    
    let opsSet = new Set( operations )

    let finalScore = []

    for ( let i = 0 ; i < ops.length ; i++) {
        if (   !opsSet.has( ops[i] )    ) {
            finalScore.push(   Number(ops[i]) )
        } else if ( ops[i] == '+' ) {
            finalScore.push( finalScore[finalScore.length-1]   + finalScore[finalScore.length-2]    )
        } else if ( ops[i] == 'D' ) {
            finalScore.push( finalScore[ finalScore.length-1] * 2    )
        } else if ( ops[i] == 'C' ) {
            finalScore.pop()
        }
                   // console.log( finalScore)
    }
  
    return finalScore.reduce( (acc,c) => acc + c , 0)
   
};

// "+" - Record a new score that is the sum of the previous two scores. 
// "D" - Record a new score that is double the previous score. 
// "C" - Invalidate the previous score, removing it from the record. 


// 5 -2 -4 9 5 14

// 5 10 15 
