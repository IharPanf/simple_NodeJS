// работа с файлами

var server = require("./server");
var fs = require("fs");

fs.readFile('../test.txt', {encoding: 'utf8'}, function (err, data) {
    if (err) throw err;
    console.log(data);

});