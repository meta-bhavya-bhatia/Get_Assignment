var mysql = require('mysql');
var express = require('express');
var app = express();
const bodyparser = require('body-parser');

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin , X-Requested-With , Content-Type , Accept");
    next();
});
var mySqlConnection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'angular'
});

mySqlConnection.connect((err)=>{
    if(!err){
        console.log("connection success");
    }
    else{
        console.log("connection error"+JSON.stringify(err));
    
    }
});
app.listen(3000,()=>console.log("express server is running"));

app.get('/getAllItemCart',(req,res)=>{
   
 mySqlConnection.query('SELECT * FROM ITEM',(err,rows)=>{
     if(!err){
         res.send(rows);
         console.log(rows);
     }
     else{
         console.log(err);
     }
 })
});

app.get('/getItemCart',(req,res)=>{
    var category = req.query.category;
    console.log(category);
 mySqlConnection.query('select * from item where item_id IN (select item_id from category_item where c_id =(select c_id from category where c_name=?)) ',[category],(err,rows)=>{
     if(!err){
         res.send(rows);
         console.log(rows);
     }
     else{
         console.log(err);
     }
 })
});
