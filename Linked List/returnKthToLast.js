/*Implement an algorithm to find the kth to last element of a singly linked list */
//CTCI

function kToLast(head, k) {
    let pointer = head
    let pointer2 = head
    for (let i = 0; i < k; i++) {
        if (!pointer) {
            return null
        }
        pointer = pointer.next
    }

    while (pointer) {
        pointer = pointer.next
        pointer2 = pointer.next
    }

    return pointer2
}

//time: O(n)
//space: O(1)