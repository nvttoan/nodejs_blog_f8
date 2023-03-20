const express = require('express');
const morgan =require('morgan');
const path = require('path')
const { engine } = require('express-handlebars');

const app = express();
const port = 3000;
const route = require('./routes');
const db = require('./config/db');
//DB connect
db.connect();

// render logo.png of http://localhost:3000/img/logo.png
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

//HTTP logger
app.use(morgan('combined'))

//template engine
//{extname: '.hbs'} change .handblebars==.hbs
app.engine('hbs', engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
//console.log('PATH:',path.join(__dirname, 'resources/views'))

//route init
//luồng chạy bắt đầu từ đây, nó sẽ tới func trong routes/index.js, 
//sau đó sẽ map với từng use, 
//nếu vào /news nó sẽ nhảy vào news.js và map tới newscontroller.js
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})