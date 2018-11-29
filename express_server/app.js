const express = require('express')
const todos = require('./todos')
const app = express()
const morgan = require('morgan')

app.set('views', 'express_server/views')
app.set('view engine', 'pug')

app.use(morgan('combined'))

// eslint-disable-next-line
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Express Todo',
    todos
  })
})

app.get('/todos', (req, res) => {
  if (req.query.completed) {
    return res.json(todos.filter(todo => todo.completed.toString() === req.query.completed))
  }

  res.json(todos)
})

app.get('/todos/:id', (req, res) => {
  // eslint-disable-next-line
  let todo = todos.find(todo => todo.id == req.params.id)

  if (!todo) return res.status(404).send('404 not found')

  res.json(todo)
})

app.listen(3000, () => console.log('Server Works'))
