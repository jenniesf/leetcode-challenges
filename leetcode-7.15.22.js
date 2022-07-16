// ADD TWO NUMBERS - LINKED LISTS

var addTwoNumbers = function(l1, l2) {
    // turn lists into arrays and reverse 
    let firstArr = createArr(l1).reverse()
    let secondArr = createArr(l2).reverse()
    
    // determine the sum of both numbers together -- join array into one number
    // use BigInt due to possible input lenghts
    let sum = BigInt( BigInt(firstArr.join('') ) + BigInt(secondArr.join('') ) )

    // turn sum into a string and then an array
    let str = sum.toString().split('')
    // turn sum into linked List and inverted/backwards
    let dummy = new ListNode()  // create first list node with 0
    let list = dummy            // gives a first node with 0
    // while string length is greater than 0 
        // .next will have a new node that is equal to is last element in str array
        // then list is equal to list.next
    while ( str.length ) {
        list.next = new ListNode( str.pop() )
        list = list.next
    }
    return dummy.next
};

// turn list into array
function createArr (list) {
    let array = []
    while(list) {
        array.push(  list.val  )
        list = list.next
    }
   return array 
}