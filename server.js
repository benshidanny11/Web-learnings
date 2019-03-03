const express=require('express');
var app=express();
const fs=require('fs');

const hbs=require('hbs');
app.use((req,res,next)=>{
	var now=new Date().toString();
	var log=`${now} : Page requested ${req.url}`;
	fs.appendFile('mylogs.txt',log+"\n",(errorMessage)=>{
     console.log(errorMessage);
	});
	console.log(log);
   next();
});

app.use(express.static(__dirname+'/public'))
app.set('view engine','hbs');
hbs.registerPartials(__dirname+'/views/partials');
app.get('/',(req,res)=>{
	res.render('home.hbs',{
		welcomeMessage:'Welcome to this website',
		title:'Home',head:'Learning is great'});
});

app.get('/about',(req,res)=>{
res.render('about.hbs',{
	pageTitle:'About this app',
	head:'You can request what ever you want'});
});

hbs.registerHelper('getCurrentDate',()=>{
return new Date().getFullYear();

});


app.listen(3799,()=>{
	console.log('Server is running on port 3799');
});
