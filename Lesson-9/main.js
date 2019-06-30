var initialObj = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    null: null,
    undefined: undefined,
    array: [1, 2, 3],
    object: {string2: 'Petrov', object2: {array2: [{}, {}]}, object3: {}},
    method: function () {
        alert('Hello');
    }
};

var clonedObj = deepClone(initialObj);

function deepClone(obj) {
    var clone = {};

    for (var key in obj) {

        if (typeof obj[key] === 'number' || typeof obj[key] === 'string' || typeof obj[key] === 'boolean'
            || typeof obj[key] === 'undefined' || obj[key] == null) {
            clone[key] = obj[key];
        }

        else if (typeof obj[key] === 'object' || typeof obj[key] === 'function') {
            deepClone(obj[key]);
        }
    }
    return clone;
}

clonedObj.object.object2.array2[1].name = 'Vasya';
clonedObj.array.push(2);
console.log(initialObj);
console.log(clonedObj);