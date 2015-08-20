
//3. My first I/O!
var fs = require('fs');

var read = fs.readFileSync(process.argv[2]);

//how many lines?
var lines = read.toString().split('\n').length -1;

console.log(lines);

