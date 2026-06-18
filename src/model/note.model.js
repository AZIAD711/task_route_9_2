import { Schema, Types, model } from "mongoose"
import { ref } from "node:process"
// TODO : NOTES SHCMEA
const noteSchema = new Schema({
    // TODO : TITLE
    title: {
        type: String,
        // TODO : SOME CONTRIANT 
        require: true,
        trim: true,
        maxLength: 60,
    },
    // TODO : CONTENT 
    content: {
        type: String,
        // TODO : SOME CONTRIANT 
        require: true,
        trim: true,
    },
    // TODO : USERID 
    password: {
        type: Schema.ObjectId,
        // TODO : SOME CONTRIANT 
        require: true,
        trim: true,
        ref:"User"
    },
},

    {
        timestamps: true,
        versionKey: "version",
        collection: "note_data",
        toJSON: { virtual: true, getter: true },
        toObject: { virtual: true, getter: true },
        strict: true,
        strictQuery: true
    }
)
// TODO : USER MODEL 
const noteModel = model("Note", noteSchema)
export default noteModel