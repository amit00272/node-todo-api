const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(error,db)=>{

    if(error){
        console.log("Unable to connect to connect mongodb server");
        return;
    }
    console.log('connected to mongo db server');

 /*    db.collection('Todos').findOneAndUpdate({
         text : "Learn node"

     },{
         $set:{

             text:"Learn Node JS Full with mongos"

         }
     },{
         returnOriginal:false

     }).then((data)=>{

     console.log(`Updated:${data}`);

     },(error)=>{

     console.log("Uable to Update",error);
     });*/


      db.collection('users').findOneAndUpdate({

            name : "Kaushal Kumar"

            },{
                $set:{
                        name:"Avinash Kumar"

                },
                $inc:{

                    age:1
                }
     },{
     returnOriginal:false

     }).then((data)=>{

     console.log(`Updated:${data}`);

     },(error)=>{

     console.log("Uable to Update",error);
     });


    db.close();
});

