class Stack {
    constructor(maxSize) {
        this.stack = [];
        this.maxSize = maxSize;
    }
    isEmpty() {
        return this.stack.length === 0;
    }

    isFull() {
        return this.stack.length === this.maxSize;
    }

    clear() {
        this.stack = [];
    }

    size () {
        return this.stack.length;
    }

    set item (items) {
        if (this.isFull()) {
            throw new Error('Item is full!');
        }
        this.stack.push(items);
    }
    get item () {
        if (this.isEmpty()) {
            throw new Error('Item is empty!');
        }
        return this.stack.pop();
    }
    swat(){
        if (this.size() < 2) {
            throw new Error('Problem');
        }
        const firstElem = this.stack.pop();
        const twoElem = this.stack.pop();
        this.stack.push(firstElem, twoElem);
    }
}