import mongoose from "mongoose";
const {Schema} = moongoose;

const categorySchema = new Schema({
    categoryName: {
        type: String,
        require: true
    },
});

const Category = mongoose.model("Category", categorySchema);

export default category;