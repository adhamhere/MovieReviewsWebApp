const express = require('express');
const Todo = require('../models/todo');
const router = new express.Router();
//var mongojs = require('mongojs');


router.get('', async (req, res) => {
    try {
        const todos = await Todo.find({});
        res.status(200).send(todos);
    } catch (error) {
        res.status(500).send(error);
    }
})




router.post('', async (req, res) => {
    const todo = new Todo(req.body);
    try {
        
     await todo.save();
        res.status(201).send(todo);
    } catch (error) {
        res.status(500).send(error);
    }
})



/*router.get('/:id', async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        res.status(200).send(todo);
    } catch (error) {
        res.status(500).send(error);
    }
})*/





//Delete
router.get('/:id', async (req, res) => {
    try {
        const todo = await Todo.findByIdAndDelete(req.params.id);
        
        res.status(200).send(todo);
    } catch (error) {
        res.status(500).send(error);
    }
})








//update
router.post('/:id',function(req,res,next)
{
  var todo = req.body;
  var updObj = {};

  if(todo.status)
  {
     updObj.status = todo.status;
  }
  if(todo.title)
  {
     updObj.title = todo.title;
  }
  if(!updObj)
  {
    res.status(400);
    res.json({
        "error" : "invalid Data"
    });
  } else {
    Todo.findByIdAndUpdate(req.params.id,updObj, {}, function(err,result){
        if(err){
            res.send(err);
        } else 
        {
            res.json(result);
        }

    });

  }

 
});



module.exports=router;