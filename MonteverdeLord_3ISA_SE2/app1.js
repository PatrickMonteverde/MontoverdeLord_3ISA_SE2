var fs = require('fs');

var content = fs.readFileSync('info.txt','utf8');

console.log(content);