const {ObjectID} = require('mongodb');
const {db}=require('./../server/db/db');
const {Todo}=require('./../server/models/todo');


var id='594baf09e45d710d3013eacd';



Todo.find({
            _id: id
        })
        .then((todos) => {
                console.log('Todos', todos);

            },(e)=>{

                    console.log(e);
            });


Todo.findOne({
             _id: id
            })
            .then((todo)=>{

                console.log('Todo',todo);
            },
             (e)=>{
                    console.log("Unable to fetch",e);
            });

