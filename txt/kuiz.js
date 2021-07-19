var fs = require('fs');
var text = fs.readFileSync("kuiz.txt", 'utf-8');
var textByLine = text.split('\n')


var fs = require("fs");
fs.readFile("kuiz.txt", function(text){
    var textByLine = text.split("\n")
});