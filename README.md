# Data Structures Implementation in JavaScript


Implementation of some Data Structures using JavaScript.

### Table of Contents




| No. | Data Stucture |
|---- | ---------
|1 | [Array](#array-implementation-in-javascript)|
|2 | [Hash Table](#hash-table-implementation-in-javascript)|
|3 | [Linked List](#linked-list-implementation-in-javascript)|
|4 | [Stack](#stack-implementation-in-javascript)|
|5 | [Queue](#queue-implementation-in-javascript)|


## Array Implementation in Javascript
```javascript
class myArray {

    constructor() {
        this.data = {};
        this.length = 0;
    }

    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    pop() {
        delete this.data[this.length - 1];
        this.length--;
        return this.length;
    }

    unshift(item) {
        for (let i = 0; i < this.length; i++) {
            this.data[this.length - i] = this.data[this.length - i - 1];
        }
        this.data[0] = item;
        this.length++;
        return this.length;
    }

    delete(index) {
        if (index >= 0 && index < this.length) {
            for (let i = index; i < this.length; i++) {
                this.data[i] = this.data[i + 1];
            }
            delete this.data[this.length - 1];
            this.length--;
        }

        return this.length;
    }

}

const arr = new myArray();
```

## Hash Table Implementation in Javascript

```javascript
class HashTable {

    constructor(size) {
        this.size = size
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.size;
    }

    set(key, value) {
        let hash = this._hash(key);
        let current = this.data[hash];
        if(current) {
            for (let i =0; i<current.length; i++) {
                if (current[i][0] == key) {
                    current[i][1] = value;
                    return;
                }
            }
            current.push([key,value]);
        } else {
            this.data[hash] = [];
            this.data[hash].push([key, value]);
        }
        return this.data;
    }
    get(key) {
        let hash = this._hash(key);
        if (this.data[hash]) {
            for (let i=0; i < this.data[hash].length; i++ ) {
                if (this.data[hash][i][0] == key) {
                    return this.data[hash][i][1];
                }
            }
        }
        return undefined;
    }
    remove(key) {
        let hash = this._hash(key);
        if (this.data[hash]) {
            for (let i=0; i < this.data[hash].length; i++ ) {
                if (this.data[hash][i][0] == key) {
                    this.data[hash].splice(i, 1);
                    return true
                }
            }
        }
        return false;
    }

}

const myHashTable = new HashTable(50)


```

## Stack Implementation In JavaScript
### Implementation with Linked List

```javascript
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

```

### Implementation with Array

```javascript
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

```
## Queue Implementation In JavaScript

```javascript
// first in first out (FIFO)
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() {
        return this.first;

    }

    enqueue(value) {
        const newNode = new Node(value);
        if (this.length == 0) {
            this.first = newNode;
            this.last = newNode;

        } else {
            this.last.next = newNode;
            this.last = newNode;

        }
        this.length++;
        return this;
    }

    dequeue() {
        if (!this.first) {
            return null;
        }
        if (this.first == this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.length--;
        return this;

    }

    isEmpty() {
        return (this.first == null && this.last == null )
    }
}

const myQueue = new Queue();

```
