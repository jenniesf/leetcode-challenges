// MERGE TWO SORTED LISTS

var mergeTwoLists = function(list1, list2) {
    if (!list1) return list2;
    if (!list2) return list1;
    
    let min, max;
    
    if (list2.val > list1.val) {
        min = list1;
        max = list2;
    } else {
        min = list2;
        max = list1;
    }
    
    min.next = mergeTwoLists(min.next, max);
    
    return min;
};

console.log( mergeTwoLists (  [1,2,4] , [1,3,4] ))