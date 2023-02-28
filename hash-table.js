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

