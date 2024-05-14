// Create web server
// Use express
const express = require('express');
const app = express();
app.use(express.json());

// Use comments.js
const comments = require('./comments');

// Define routes
// GET /comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// GET /comments/:id
app.get('/comments/:id', (req, res) => {
  const id = Number(req.params.id);
  const comment = comments.find(comment => comment.id === id);
  res.json(comment);
});

// POST /comments
app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.json(comment);
});

// PUT /comments/:id
app.put('/comments/:id', (req, res) => {
  const id = Number(req.params.id);
  const newComment = req.body;
  const index = comments.findIndex(comment => comment.id === id);
  comments[index] = newComment;
  res.json(newComment);
});

// DELETE /comments/:id
app.delete('/comments/:id', (req, res) => {
  const id = Number(req.params.id);
  comments = comments.filter(comment => comment.id !== id);
  res.status(204).send();
});

// Start server
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

// Path: comments.js
// Create comments array
let comments = [
  {
    id: 1,