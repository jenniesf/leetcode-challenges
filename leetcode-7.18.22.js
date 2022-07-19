// REVERSE A LINKED LISTS

const reverseList = (head) => {
    // todo
    let current = head
    let prev = null
    
    while(current) {
      let temp = current.next
      current.next = prev
      prev = current
      current = temp 
    }
    return prev
  
  };
  
  module.exports = {
    reverseList,
  };
  