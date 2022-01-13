const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const nunjucks = require('nunjucks');
const axios = require('axios');
const {Posts} = require('./models');

const app = express();
const port = 8000;
const router = require('./routes/router');

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/public", express.static(__dirname + "/public"));

app.set('view engine', 'html');
nunjucks.configure('views', {
  express: app,
  watch: true,
});

app.use("/api", router)

// 페이지 불러오기
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/post', (req, res) => {
  res.render('post');
});

app.get('/detail/:postId', async (req, res) => {
  const {postId} = req.params;
  const posts = await Posts.findByPk(postId);
  res.render('detail', {posts});
});

app.get('/editpost/:postId', async (req, res) => {
  const {postId} = req.params;
  const posts = await Posts.findByPk(postId);
  res.render('editpost', {posts});
});


app.listen(port, () => {
  console.log(`서버 접속 http://localhost:${port}!`)
})
