import express from 'express'
import { getTodos , postTodos ,todoDone, deleteTodo} from '../controllers/userTodo.js'
import  verifyUser  from '../middlewares/authMiddleware.js'

const todoRouter = express.Router()

  
todoRouter.get('/:userId',getTodos)
todoRouter.post('/' ,verifyUser, postTodos)
todoRouter.delete('/:id' , verifyUser,deleteTodo)
todoRouter.put('/:id' ,verifyUser, todoDone)
export default todoRouter
