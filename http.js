
const http = require('http') ;
const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('welcome to home');
    }
   if(req.url==='/about'){
    res.end('here you can read about our history');
   }
res.end(`
<h1>OoOps!</h1>
<p>looks like there is nothing here</p>
<a href="/">back to home</a>
`)

})

server.listen(5000);
