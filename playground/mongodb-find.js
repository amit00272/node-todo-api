const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(error,db)=>{

    if(error){
        console.log("Unable to connect to connect mongodb server");
        return;
    }
   /* console.log('connected to mongo db server');
    db.collection('Todos').find({
        _id:new ObjectID('594b535c55f15303876c90e6')

    }).toArray().then((docs)=>{

        console.log("Todos");
        console.log(JSON.stringify(docs,undefined,2));

    },(error)=>{

        console.log("Uable to fetch",error);
    });*/


   /* db.collection('Todos').find().count().then((count)=>{

        console.log(`Todos Count:${count}`);

    },(error)=>{

        console.log("Uable to fetch",error);
    });*/


     db.collection('users').find({

         name:'Amit Kumar'

     }).toArray().then((docs)=>{

     console.log("Users");
     console.log(JSON.stringify(docs,undefined,2));

     },(error)=>{

     console.log("Uable to fetch",error);
     });


    db.close();
});
