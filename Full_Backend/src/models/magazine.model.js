import mongoose , { Schema , Model} from "mongoose";
import { User } from "./user.model.js";
import mongooseAggergatePaginate from "mongoose-aggregate-paginate-v2";

const   magazineSchema = new Schema({
    imageFile: {
        type: String,
        required: true, 
    },
    owner : { 
        type: Schema.Types.ObjectId,
        ref: 'Admin',
     },
    title : {
        type : String,
        required : true
    },
    description : {
        type :String,
        required : true
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
 
magazineSchema.plugin(mongooseAggergatePaginate);

export const Magazine = Model("Magazine" , magazineSchema) 