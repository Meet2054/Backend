import mongoose , { Schema , Model} from "mongoose";
import { User } from "./user.model.js";
import mongooseAggergatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema({
    videoFile: {
        type: String,
        required: true, 
    },
    thumbnail: {
        type :String,
        required : true
    },
    owner : { 
        type: Schema.Types.ObjectId,
        ref: 'User',
     },
    title : {
        type : String,
        required : true
    },
    description : {
        type :String,
        required : true
    },
    duration : {
        type : Number,
        required : true,

    },
    views : {
        type : Number,
        default : 0
    },
    likes : {
        type : Number,
        default : 0
    },
    isPublished : {
        type : Boolean,
        default : true
    },


},{timestamps : true})
 
videoSchema.plugin(mongooseAggergatePaginate);

export const Video = Model("Video" , videoSchema) 