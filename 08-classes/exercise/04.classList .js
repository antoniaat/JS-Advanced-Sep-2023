class List {
    constructor() {
        this.collection = [];
        this.size = 0;
    }
    add(element) {
        this.collection.push(element);
        this.collection.sort((a, b) => a - b);
        this.size = this.collection.length;
    }
    get(index) {
        if(index >= this.collection.length || index < 0){
            throw new Error ("Invalid index")
        }
        this.size = this.collection.length;
        return this.collection[index];
    }
    remove(index) {
        if(index >= this.collection.length || index < 0){
            throw new Error ("Invalid index")
        }
        this.collection.splice(index, 1);
        return this.size = this.collection.length;
    }

}

let list = new List();
list.add(5);
console.log(list.get(0));
list.add(3);
console.log(list.get(0));
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));