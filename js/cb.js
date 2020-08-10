
var renderItem = function (item) {
    console.log(item.name);
};

var callback = function (data) {
    for (let i = 0; i < data.length; i++) {
        renderItem(data[i]);
    }
}

callback([
    { 'name': 'obj1' },
    { 'name': 'obj2' },
    { 'name': 'obj3' }
]);
