import mongoose, { Schema } from "mongoose";

const CommentSchema = new mongoose.Schema({
   coment: {
    type: String,
    required: true,
    unique: true,
   },
   user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
   },
},
    {
    timestamps: true,
   }, 
);

export default mongoose.model('Comment', CommentSchema);