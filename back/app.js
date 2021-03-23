const express = require('express');
const cors = require('cors')
const userRouter = require('./routes/user.js');
const postRouter = require('./routes/post.js');
const db = require('./models');
const app = express();
db.sequelize.sync()
  .then(() => {
      console.log('db 연결 성공');
  })
  .catch(console.err);

app.use(cors({
    origin: '*',
    credentials: false
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
app.use('/user', userRouter);

app.listen(3065, () => {
    console.log('서버 실행중.')
});