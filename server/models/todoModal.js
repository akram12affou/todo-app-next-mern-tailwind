import mongoose, { Mongoose } from 'mongoose'


const todoSchema = mongoose.Schema({
    todoname:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true,
        default: new Date()
    },
    done:{
        type:Boolean,
        required:true,
        default : false
    },
    // userId:{
    //     type:  mongoose.Schema.Types.ObjectId,
    //     required: true
    // }
})
const todoModal = mongoose.model('todos' , todoSchema)
export default todoModal