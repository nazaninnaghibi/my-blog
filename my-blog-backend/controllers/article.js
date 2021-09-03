const express = require('express');

let Todo = require('../models/articles');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.send(todos);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

router.get('/:id', async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
      return res.status(404).send('task not found');
    }
    res.send(todo);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

router.post('/:name', async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.name);
    if (!todo) {
      return res.status(404).send('task not found');
    }
    res.send(todo);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

router.post('/', async (req, res) => {
  try {
    const newTodo = new Todo({
      name: req.body.name,
      upvotes: req.body.upvotes,
      comments:[{
        username:req.body.username,
        text:req.body.text
      }],
    });

    const result = await newTodo.save();

    res.send(result);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

router.delete('/', async (req, res) => {
  try {
    const todo = await Todo.findById(req.body.id);
    if (!todo) {
      return res.status(404).json({ msg: 'Task not found' });
    }
    const result = await Todo.findByIdAndDelete(req.body.id);
    res.send(result);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

router.put('/', async (req, res) => {
  try {
    const todo = await Todo.findById(req.body.id);
    if (!todo) {
      return res.status(404).json({ msg: 'Task not found' });
    }

    todo.name = req.body.name;
    todo.upvotes = req.body.upvotes;
    todo.comments=[{
      username:req.body.username,
      text:req.body.text
    }],
    await todo.save();
    res.send(todo);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
