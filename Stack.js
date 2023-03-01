// Last in First out (LIFO)

//with linked list
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class StackWithLinkedList {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    push(value) {
        let newNode = new Node(value);
        if (this.length == 0) {
            this.bottom = newNode;
            this.top = newNode;
        } else {
            let temp = this.top;
            this.top = newNode;
            this.top.next = temp;
        }
        this.length++;
        return this
    }
    pop() {
        if(!this.top) {
            return null;
        }
        if (this.top == this.bottom) {
            this.bottom = null;
            this.length = 0;
            return this;
        } 
            
        this.top = this.top.next;
        this.length--;
        return this;
        
            
        
    }
    peek() {
         return this.top;
    }
    isEmpty() {
        return (this.top == null && this.top == null) ? true : false;
    }
}

const myFirstStack = new StackWithLinkedList();



// Stack with Array

class StackWithArray {

    constructor() {
        this.data = [];
    }
    push(value) {
        this.data.push(value);
        return this.data;
    }
    pop() {
        this.data.pop();
        return this.data;
    }
    peek() {
        return this.data[this.data.length - 1]
        
    }
    isEmpty() {
        return (this.data.length == 0);
    }
}

const mySecondStack = new StackWithArray();

