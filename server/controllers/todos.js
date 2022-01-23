const todoRouter = require( "express" ).Router()
const Todo = require( "../models/todo" )

todoRouter.get( "/api/todos", async (req, res) => {
    try {
        const todos = await Todo.find({})
        res.json( todos )
    } catch (err) {
        next(err)
    }
})

todoRouter.get( "/api/todos/:id", async (req, res, next) => {
    try {
        const todo = await Todo.findById( req.params.id )
        todo ? res.json( todo ) : res.status(404).end()
    } catch (err) {
        next(err)
    }
})

todoRouter.post( "/api/todos", async (req, res, next) => {
    try {
        const todo = new Todo( req.body )
        const savedTodo = await todo.save()
        savedTodo ? res.status(201).json(savedTodo) : res.status(404).end()
    } catch (err) {
        next(err)
    }
})

todoRouter.delete( "/api/todos/:id", async (req, res, next) => {
    try {
        const todo = await Todo.findByIdAndRemove( req.params.id )
        todo ? res.json( todo ) : res.status(400).end()
    } catch (err) {
        next(err)
    }
})

todoRouter.put( "/api/todos/:id", async (req, res, next) => {
    try {
        const body = req.body
        const savedTodo = await Todo.findByIdAndUpdate( req.params.id, body, { new: true } )
        savedTodo ? res.status(201).json(savedTodo) : res.status(404).end()
    } catch (err) {
        next(err)
    }
})

module.exports = todoRouter
