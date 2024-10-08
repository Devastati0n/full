//production or development 

if(process.env.NODE_ENV !== 'production'){
require("dotenv").config()
}

const express = require('express'); 
const app = express(); 
const expressLayouts = require('express-ejs-layouts'); 
const bodyParser = require('body-parser'); 
const methodOverride = require('method-override')


const indexRouter = require('./routes/index'); 
const authorRouter = require('./routes/authors'); 
const bookRouter = require('./routes/books'); 

app.set('view engine', 'ejs'); 
app.set('views', __dirname + '/views'); 
app.set('layout', 'layouts/layout'); 

app.use(expressLayouts); 
app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use(bodyParser.urlencoded({limit: '10mb', extended:false})); 


const mongoose = require('mongoose'); 

mongoose.connect(process.env.DATABASE_URL);


const db = mongoose.connection; 

db.on('error', error => console.error(error)); 
db.once('open', () => console.log('connected to mongoose')); 


app.use('/', indexRouter); 
app.use('/authors', authorRouter); 
app.use('/books', bookRouter); 


app.listen(process.env.PORT || 3000); 










/* 
npm init -y
npm i express ejs express-ejs-layouts
npm i --save-dev nodemon
npm i --save-dev dotenv
npm i mongoose
git init 
npm run devStart

git remote add origin https://github.com/Devastati0n/full.git
git branch -M main
git push -u origin main
npm i body-parser
npm i multer
npm uninstall -D package-name
Set-ExecutionPolicy –ExecutionPolicy RemoteSigned

*/ 


//PIurGCPggKnLLI7U
//mongodb+srv://havokcs1:<PIurGCPggKnLLI7U>@cluster0.hzry53b.mongodb.net/

