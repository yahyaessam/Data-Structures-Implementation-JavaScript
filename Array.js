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



