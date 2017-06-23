var mongoose=require('mongoose');

    mongoose.Promise=global.Promise;
    mongoose.connect('mongodb://localhost:27017/TodoApp');


var Todo=mongoose.model('Todo',{
    text:{
        type:String,
        required:true,
        minlength:1,
        trim:true
    },
    completed:{
        type:Boolean,
        default:false
    },
    completedAt:{
        type:Number,
        default:null
    }

});

/*var newTodo=new Todo({
 text:"Coock dinner"
 });

 newTodo.save().then((data)=>{

 console.log("Save to do:"+data);
 },(e)=>{

 console.log("Unable to save to do",e) ;
 });*/



new Todo({
    text:"check phone",
    completed:true,
    completedAt:0

}).save().then((data)=>{

    console.log("Save to do:"+data);

},(e)=>{

    console.log("Unable to save to do",e) ;

});
