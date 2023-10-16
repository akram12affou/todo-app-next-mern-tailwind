import todoModal from "../models/todoModal.js"
 
export const getTodos = async (req,res) => {
    const {userId} = req.params
   const todos = await todoModal.find({userId})
   res.json(todos)
} 
 
export const postTodos = (req , res) => {
    const {todoname,userId} = req.body;
    const newTodo = new todoModal(
        {  
            todoname, 
            userId
        } 
    )
    newTodo.save(); 
    res.json(newTodo)
}

export const editTodos = (req , res) => {
    const {done} = req.body;
    res.json(done)
}

export const deleteTodo  = async(req , res) => {
    const {id} = req.params
    const todo = await todoModal.findByIdAndDelete(id)
    res.json('deleted')
}
export const todoDone =  async (req,res) => {
    const {id} = req.params;
    const todo = await todoModal.findById(id)
    const editedtTodo = await todoModal.findByIdAndUpdate(id,
       {done : !todo.done}  
    );
    editedtTodo.save();
    res.json(id);
}