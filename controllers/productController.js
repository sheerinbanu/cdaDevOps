import Product from "../models/Product.js";

// Get All Products
export const getProducts = async (req, res, next) => {
  const productsByCategory = await Product.find({
    ownedByCategory: "6439050be168b64970bff5c5",
  });
  console.log(productsByCategory);
  res.status(201).json({ productsByCategory: productsByCategory });
};

// Create Product
export const postProduct = async (req, res, next) => {
  // Send productName to the req.body
  const productName = req.body.productName;
  const categoryID = req.body.categoryID;

  // create new product with mongoose
  const product = await Product.create({
    productName: productName,
    ownedByCategory: categoryID,
  });

  console.log(product);
  //   res.status(201).redirect("/products");
  res.status(201).json({ product });
};
