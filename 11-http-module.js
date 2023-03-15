const http = require('http');

const server = http.createServer((req,res)=> {
    if(req.url === '/'){
        res.end('Welccome to our home page')
    }
    if (req.url === '/about') {
        res.end('Welccome to ABOUT YOU page')
    }
    res.end(`
    <h1>Oops!</h1>
    <p> WE can't find the apge you are looking for</p>
    <a href="/"> hack home </a>
    `)


})

server.listen(8080)