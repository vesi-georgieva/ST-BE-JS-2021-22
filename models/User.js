import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema ({
    email:  {
        unique: true,
        type: String,
    },
    password:  { 
        type: String, 
        min: 6, 
        max: 255 
    },
    books: [{
        type: Schema.Types.ObjectId,
        ref: 'Book' 
    }],
    firstName: { 
        type: String, 
        min: 1, 
        max: 255 
    },
    lastName: { 
        type: String, 
        min: 1, 
        max: 255 
    },
    roles: [],
})

const User = mongoose.model("User", UserSchema);
export default User;
