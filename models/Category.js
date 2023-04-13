import mongoose from "mongoose";
const { Schema } = mongoose;

const categorySchema = new Schema({
  categoryName: {
    type: String,
    require: true,
  },
  categoryDescription: {
    type: String,
  }
});

const Category = mongoose.model("Category", categorySchema);

export default Category;
