import mongoose from 'mongoose';
import { Schema } from 'mongoose';



const commentSchema = new Schema({
    postId: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    content: { type: String, required: true },
    // createdAt: { type: Date, default: Date.now },
    // updatedAt: { type: Date, default: Date.now 
  },{
    timestamps: true
  });
  

export default Comment = mongoose.model('Comment', commentSchema);
