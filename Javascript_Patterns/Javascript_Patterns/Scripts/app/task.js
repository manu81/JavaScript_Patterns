
var task = {};

task.title = 'My task';
task.description = "Description";

Object.defineProperty(task, 'toString', {
    value: function () {
        return this.title + ' ' + this.description;
    },
    writable: false,
    enumerable: true,
    configurable:true
})


var urgentTask = Object.create(task);

Object.defineProperty(urgentTask, 'toString', {
    value: function () {
        return this.title + ' ' + 'is urgent';
    },
    writable: false,
    enumerable: true,
    configurable: true
})

console.log(urgentTask.toString());