const express=require('express');
const app=express();
const sendmail=require('./controllers/sendmail');

app.get("/",(req,res)=>{
    res.send('i am from home page');
});

app.get("/sendemail",sendmail);

app.listen(9000 , ()=>{
    console.log("connection on port : 9000");
})