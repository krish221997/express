const express=require('express');
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

 app.listen(3000);
