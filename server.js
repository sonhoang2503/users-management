const path = require('path');
require('dotenv').config({ path: __dirname + '/.env' });
const express = require('express');
const hbs = require('express-handlebars');

const userRouter = require('./routes/user');
const app = express();

app.set('view engine', 'exhbs');

// EXPRESS BODY PARSER
app.use(express.json());
app.use(express({ extended: false }));

// STATIC FILES
app.use(express.static(path.join(__dirname, 'public')));

// VIEW TEMPLATE
app.engine(
  'hbs',
  hbs.engine({
    extname: 'hbs',
    defaultLayout: 'main',
    layoutsDir: __dirname + '/views/layouts',
  })
);
app.set('view engine', 'hbs');

// ROUTER
app.use('/', userRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
  console.log(process.env.PORT);
});
