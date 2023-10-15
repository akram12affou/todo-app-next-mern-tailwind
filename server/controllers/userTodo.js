import todoModal from "../models/todoModal.js"

export const getTodos = async (req,res) => {
   const todos = await todoModal.find()
   res.json(todos)
} 

export const postTodos = (req , res) => {
    const {todoname} = req.body;
    const newTodo = new todoModal(
        { 
            todoname,
           
        }
    )
    newTodo.save(); 
    res.json(newTodo)
}