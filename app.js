var express =require('express');
var todoController=require('./controllers/todocontroller');

var app=express();

//set up template engine
app.set('view engine','ejs');

//static files
app.use(express.static('./public'));

//fire controllers
todoController(app);

app.listen(3000);
console.log('Listening To Port 3000');
