/**
 * Created by noargs on 22/06/17.
 */

const expect=require('expect');
const request =require('supertest');
const {app}=require('./server');
const {Todo}=require('./models/todo');
const {ObjectID} = require('mongodb');

const todos=[{
    _id:new ObjectID(),
    text:"Fist to do"

},{
    _id:new ObjectID(),
    text:'second text todo'
}]

beforeEach((done)=>{

    Todo.remove({}).then(()=>{

       return  Todo.insertMany(todos);

    }).then(()=>done());
});

describe('POST /todos',()=>{

   it('Should create a new todo',(done)=>{

       var text="Test todo text";
       request(app)
           .post('/todos')
           .send({text})
           .expect(200)
           .expect((res)=>{
             expect(res.body.text).toBe(text);
           })
           .end((err,res)=>{
               if(err){
                   return done(err);
               }
                Todo.find({text}).then((todos)=>{

                   expect(todos.length).toBe(1);
                   expect(todos[0].text).toBe(text);
                   done();

                }).catch((e)=>{
                   done(e);
                });
           });

   }) ;



    it('Should save only valid data',(done)=>{


        request(app)
            .post('/todos')
            .send()
            .expect(400)
            .end((err,res)=>{
                if(err){
                    return done(err);
                }
                Todo.find().then((todos)=>{

                    expect(todos.length).toBe(2);
                    done();

                }).catch((e)=>{
                    done(e);
                });
            });

    }) ;

});

describe('Get /todos',()=>{

   it('should get all todos',(done)=>{
       request(app).get('/todos').expect(200)
           .expect((res)=>{
                    expect(res.body.todos.length).toBe(2);
           }).end(done);

   });
});



describe('Get /todos',()=>{

    it('Should take only valid object',(done)=>{

        request(app).get('/todos/123')
                    .expect(404)
                    .end(done);

    });

    it('Should take empty object if there is nothing with this id',(done)=>{

        request(app).get('/todos/594cbc976abf5a06055e3238')
                    .expect(404)
                    .end(done);

    });


    it('Should take valid object with  id',(done)=>{

        request(app).get(`/todos/${todos[0]._id.toHexString()}`)
            .expect(200)
            .expect(res=>{
                 expect(res.body.todo.text).toBe(todos[0].text);
            }).end(done);

    });
});