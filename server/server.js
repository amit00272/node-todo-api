var express=require('express');
var bodyParser=require('body-parser');
const {ObjectID} = require('mongodb');
var {mongoose}=require('./db/db');
var {Todo}=require('./models/todo');
var {User}=require('./models/user');

var app=express();

const port=process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{

    var todo =new Todo({
        text:req.body.text
    });

    todo.save().then((data)=>{

        console.log("Data inserted");
         res.send(data);
    },(e)=>{

        res.status(400).send(e);
    })
});


app.get('/todos',(req,res)=>{

Todo.find().then((todos)=>{
    res.send({todos});

},(e)=>{
res.sendStatus(400).send(e);
});
});

app.get('/todos/:id',(req,res)=>{

       var id=req.params.id;
       if(!ObjectID.isValid(id))
           return res.sendStatus(404).send();

         Todo.findById(id).then((todo)=>{

             if(!todo)
                return res.sendStatus(404);

             res.send({todo});

           }).catch((error)=>res.sendStatus(400).send({error}));


});


app.listen(port,()=>{

     console.log(`Started on port ${port}`);
});



module.exports={app};
