/*Write a function that takes in the head of a Singly Linked List that contains a loop (in other words, the list's tail node points to 
some node in the list instead of the None (null) value). The function should return the node (the actual node - not just its value) from 
which the loop originates in constant space. Note that every node in the Singly Linked List has a "value" property storing its value as 
well as a "next" property pointing to the next node in the list. */
//AE

class LinkedList {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

function findLoop(head) {
	let pointer1 = head.next
	let pointer2 = head.next.next
	while (pointer1 !== pointer2) {
		pointer1 = pointer1.next
		pointer2 = pointer2.next.next
	}
	pointer1 = head
	while (pointer1 !== pointer2) {
		pointer1 = pointer1.next
		pointer2 = pointer2.next
	}
	return pointer1
}

// function findLoop(head) {
	// if (pointer.visited){
	// 		return pointer
	// 	}
	// 	pointer.visited = true;
	// 	pointer = pointer.next;
// }