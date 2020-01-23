/* Write a function that takes in the head of a Singly Linked List and an integer k (assume that the list has at least k nodes).
The function should remove the kth node from the end of the list. Note that every node in the Singly Linked List has a "value" property
storing its value as well as a "next" property pointing to the next node in the list or None (null) if it is the tail of the list. */
//AE

class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function removeKthNodeFromEnd(head, k) {
    // Write your code here.
    let counter = 0
    let pointer = head
    while (pointer) {
        pointer = pointer.next
        counter++
    }
    if (counter === k) {
        head.value = head.next.value
        head.next = head.next.next
        return head;
    }
    pointer = head
    let target = counter - k
    if (target === 1) {
        head.next = head.next.next
        return head
    }
    for (let i = 0; i < target; i++) {
        pointer = pointer.next
        if (i === target - 2) {
            if (pointer.next) {
                pointer.next = pointer.next.next
            } else {
                pointer = pointer.next
            }
        }
    }
    return head
}