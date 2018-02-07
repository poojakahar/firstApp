console.log("Express");

const express=require('express');
const hbs=require('hbs');
const fs=require('fs');

var app=express();

hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('currYear',() => {
    return new Date().getFullYear();
});
app.set('view engine','hbs');

app.use(express.static(__dirname + '/public'));



app.use((req,res,next)=>{
    var now=new Date().toString();
    var log=" " + now + ":"  + req.method + " " + req.url;
    console.log(log);
    fs.appendFile('expressEx.log',log + "\n");
    next();
});

/*app.use((req,res,next)=>{
    res.render('maintenance.hbs');
    next();
});*/

app.get("/home",(req,res)=>{
    res.render('home.hbs',{
        pageTitle: 'Home Page'
    });
});

app.get("/about",(req,res)=>{
   res.render('about.hbs',{
        pageTitle:'About Page'
    });
});

app.listen(3000);