import mongoose from "mongoose";


const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    categroy: {
        type: String,
    },
    Image: {
        type: String,
        required: false
    }


})


const article = mongoose.model("article", articleSchema);
export default article;