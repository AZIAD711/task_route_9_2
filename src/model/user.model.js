import { Schema, model } from "mongoose"
// TODO : USER SHCMEA
const userSchema = new Schema({
    // TODO : NAME
    name: {
        type: String,
        // TODO : SOME CONTRIANT 
        require: true,
        trim: true,
        maxLength: 100,
        minLength: 3,
    },
    // TODO : EMAIL 
    email: {
        type: String,
        // TODO : SOME CONTRIANT 
        require: true,
        trim: true,
        maxLength: 100,
        unique: true
    },
    // TODO : PASSWORD 
    password: {
        type: String,
        // TODO : SOME CONTRIANT 
        require: true,
        trim: true,
        maxLength: 6,
        minLength: 6,
    },
    // TODO : PHONE 
    phoneNumber: {
        type: String,
        // TODO : SOME CONTRIANT 
        require: true,
        trim: true,
        maxLength: 11,
        minLength: 11,
    },
    // TODO : AGE 
    age: {
        type: Number,
        // TODO : SOME CONTRIANT 
        trim: true,
    },
},

    {
        timestamps: true,
        versionKey: "version",
        collection: "user_data",
        toJSON: { virtual: true, getter: true },
        toObject: { virtual: true, getter: true },
        strict: true,
        strictQuery: true
    }
)
// TODO : USER MODEL 
const userModel = model("User", userSchema)
export default userModel