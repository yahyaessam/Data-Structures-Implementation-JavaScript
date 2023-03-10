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
|6 | [Binary Search Tree](#Binary-Search-Tree-Impelementation-in-JavaScript)|

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

## Linked List Implementation in Javascript

```javascript
// Node class
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Linked list class
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(data) {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
      this.tail = node;
      return;
    }

    this.tail.next = node;
    this.tail = node;
  }

  prepend(data) {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
      this.tail = node;
      return;
    }

    node.next = this.head;
    this.head = node;
  }

  delete(data) {
    if (!this.head) {
      return;
    }

    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    while (current.next) {
      if (current.next.data === data) {
        current.next = current.next.next;
        if (current.next === null) {
          this.tail = current;
        }
        return;
      }
      current = current.next;
    }
  }

  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

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

## Binary Search Tree Impelementation in JavaScript
```javascript

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null

    }

    insert(value) {
        const newNode = new TreeNode(value);
        if (!this.root) {
            this.root = newNode;
            return this
        } else {

            let currentNode = this.root
            while (true) {
                if (value < currentNode.value) {
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    } else {
                        currentNode = currentNode.left;
                    }
                } else {
                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    } else {
                        currentNode = currentNode.right;
                    }
                }

            }
        }
    }
    lookUp(value) {
        if (!this.root) {
            return false;
        }
        let currentNode = this.root;
        while (currentNode) {
            if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                currentNode = currentNode.right;
            } else if (value === currentNode.value) {
                return currentNode
            }
        }
        return false;
    }

    remove(value) {
        if (!this.root) {
          return false;
        }
        let currentNode = this.root;
        let parentNode = null;
        while(currentNode){
          if(value < currentNode.value){
            parentNode = currentNode;
            currentNode = currentNode.left;
          } else if(value > currentNode.value){
            parentNode = currentNode;
            currentNode = currentNode.right;
          } else if (currentNode.value === value) {
            //We have a match, get to work!
            
            //Option 1: No right child: 
            if (currentNode.right === null) {
              if (parentNode === null) {
                this.root = currentNode.left;
              } else {
                
                //if parent > current value, make current left child a child of parent
                if(currentNode.value < parentNode.value) {
                  parentNode.left = currentNode.left;
                
                //if parent < current value, make left child a right child of parent
                } else if(currentNode.value > parentNode.value) {
                  parentNode.right = currentNode.left;
                }
              }
            
            //Option 2: Right child which doesnt have a left child
            } else if (currentNode.right.left === null) {
              currentNode.right.left = currentNode.left;
              if(parentNode === null) {
                this.root = currentNode.right;
              } else {
                
                //if parent > current, make right child of the left the parent
                if(currentNode.value < parentNode.value) {
                  parentNode.left = currentNode.right;
                
                //if parent < current, make right child a right child of the parent
                } else if (currentNode.value > parentNode.value) {
                  parentNode.right = currentNode.right;
                }
              }
            
            //Option 3: Right child that has a left child
            } else {
    
              //find the Right child's left most child
              let leftmost = currentNode.right.left;
              let leftmostParent = currentNode.right;
              while(leftmost.left !== null) {
                leftmostParent = leftmost;
                leftmost = leftmost.left;
              }
              
              //Parent's left subtree is now leftmost's right subtree
              leftmostParent.left = leftmost.right;
              leftmost.left = currentNode.left;
              leftmost.right = currentNode.right;
    
              if(parentNode === null) {
                this.root = leftmost;
              } else {
                if(currentNode.value < parentNode.value) {
                  parentNode.left = leftmost;
                } else if(currentNode.value > parentNode.value) {
                  parentNode.right = leftmost;
                }
              }
            }
        }
    
        }       
    }

}

const myTree = new BinarySearchTree();


```
