const http = require('http');
const server = http.createServer((req, res)=>{
    console.log(req.url, req.method);
    res.write('<h1>Hello Node1</h1>');
    res.write('<h2>Hello Node2</h2>');
    res.write('<h3>Hello Node3</h3>');
    res.write('<h4>Hello Node4</h4>');
    res.end('<h5>Hello Node5</h5>');
});
server.listen(3065, () => {
    console.log('콘솔 실행중.')
});