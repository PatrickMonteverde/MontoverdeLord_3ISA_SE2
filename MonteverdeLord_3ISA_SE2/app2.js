var fs = require('fs');

var info = fs.readFileSync('info.txt','utf8');

fs. writeFile('info2.txt',info,(err)=>{});