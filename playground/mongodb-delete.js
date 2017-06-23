const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(error,db)=>{

    if(error){
        console.log("Unable to connect to connect mongodb server");
        return;
    }
   console.log('connected to mongo db server');

     db.collection('users').deleteMany({

         name:'Amit Kumar'

     }).then((success)=>{

     console.log('result:success');
     console.log(JSON.stringify(success,undefined,2));

     },(error)=>{

     console.log("Uable to delete",error);
     });





   // db.close();
});

