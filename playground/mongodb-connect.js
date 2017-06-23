//const mongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');


/////Object destucting feature from es6//////
/*var user={name:'amit',age:25};
var {name}=user;
console.log(user);
console.log(name);*/
////////////////

MongoClient.connect('mongodb://localhost:27017/TodoApp',(error,db)=>{

    if(error){
        console.log("Unable to connect to connect mongodb server");
        return;
    }
    console.log('connected to mongo db server');
    /*db.collection('Todos').insertOne({

     text:'Something to do',
     completed:false

     },(err,result)=>{

     if(err){
     console.log("Unable to insert todos");
     return;
     }
     console.log(JSON.stringify(result.ops,undefined,2));
     });
     */

/*    db.collection('users').insertOne({

        name:'Amit Kumar',
        age:26,
        location:'Delhi'

    },(error,result)=>{

        if(error)
            return console.log("Unable to insert data ");

        console.log(`data has been inserted`);
        console.log(JSON.stringify(result.ops));


    });*/

    db.close();
});