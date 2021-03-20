const express = require('express');
const postRouter = require('./routes/post.js');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello Express');
});

app.get('/', (req, res) => {
    res.send('Hello API');
});

app.get('/posts', (req, res) => {
    res.json([
        {id: 1, content: 'hello'},
        {id: 2, content: 'hello2'},
        {id: 3, content: 'hello3'}
    ]);
});

app.use('/post', postRouter);

app.listen(3065, () => {
    console.log('서버 실행중.')
});