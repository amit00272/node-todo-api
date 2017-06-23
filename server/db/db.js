var mongoose=require('mongoose');

    mongoose.Promise=global.Promise;
    mongoose.connect('mongodb://amit00272:amit00272@ds135912.mlab.com:35912/todoapp||mongodb://localhost:27017/TodoApp');

module.exports={mongoose};
