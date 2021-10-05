const fs = require('fs');

const http = require('http')

const server = http.createServer((req, res) =>{
    if (req.url === "/"){
        res.write(fs.readFileSync('/info.txt'));
        res.end();
    }else{
        console.log("404 not found")
    }
}).listen(3000);