const express=require('express');
const port = process.env.PORT || 3000;
 var app=express();

 app.get('/',(req,res)=>{
     //res.send('Hello World!');
     res.send({
         name:'Krish',
         likes:[
             'Cars',
             'Money'
         ]
     });

 });

 app.listen(port);
