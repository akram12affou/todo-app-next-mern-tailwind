import express from 'express'
import { getTodos , postTodos ,todoDone, deleteTodo} from '../controllers/userTodo.js'


const todoRouter = express.Router()

 
todoRouter.get('/:userId',getTodos)
todoRouter.post('/' , postTodos)
todoRouter.delete('/:id' , deleteTodo)
todoRouter.put('/:id' , todoDone)
export default todoRouter
