// Implement a function to check if a linked list is a palindrome
//CTCI

function palindromeChecker(head) {
    if (head === null || head.next === null) return true
    let slow = head
    let fast = head
    while (fast.next !== null && fast.next.next !== null) {
        slow = slow.next
        fast = fast.next.next
    }

    slow.next = reverseList(slow.next)
    slow = slow.next

    while (slow) {
        if (slow.val !== head.val) {
            return false
        }
        slow = slow.next
        head = head.next
    }
    return true
}

function reverseList(head) {
    p1 = null
    p2 = head
    while (p2) {
        const p3 = p2.next
        p2.next = p1
        p1 = p2
        p2 = p3
    }

    return p1;
}

//time: O(n)
//space: O(1)