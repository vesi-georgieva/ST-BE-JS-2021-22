import mongoose from "mongoose";
const { Schema } = mongoose;

const BookSchema = new Schema ({
    title:  String,
    description: String,
    image: String,
    rating: {
        type: Number,
        default: 0,
    },
})

const Book = mongoose.model("Book", BookSchema);
export default Book;

