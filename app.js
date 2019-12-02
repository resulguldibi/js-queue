class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(item) {
        this.items.push(item);
    }

    dequeue() {
        return this.items.shift()
    }

    batchDequeue(size) {
        var list = [];
        for (var j = 0; j < size; j++) {
            var item = this.dequeue();
            if (item !== undefined && item !== null) {
                list.push(item);
            }

        }

        return list;

    }
}

var queue = new Queue();
var index = 0;

window.setInterval(function() {

    for (var i = 0; i < 100; i++) {
        index = index + 1;
        queue.enqueue(index);
    }

}, 5000);




window.setInterval(function() {
    var list = queue.batchDequeue(100);

    console.log("list : ", list);



}, 5000);