import mongoose from "mongoose";
const { Schema } = mongoose;

const productSchema = new Schema({
  productName: {
    type: String,
    require: true,
  },
  ownedbyCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "category",
  },
});

const Product = mongoose.model("Product", productSchema);

export default Product;
