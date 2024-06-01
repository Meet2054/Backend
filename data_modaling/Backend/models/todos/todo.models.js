import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false,
    },
    createdBy: {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    subtodo: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref : "SubTodo"
        }
    ]
},{timpStamps: true} );

export const Todo = mongoose.model("Todo",todoSchema) 