import Category from "../models/Category.js";

// Get All Categories
export const getCategories = async (req, res, next) => {
  const categories = await Category.find();
  res.render("category/getCategories", {
    title: "CategoryList",
    categories: categories,
  });
};

// Create Category
export const postCategory = async (req, res, next) => {
  // Send categoryName to the req.body
  const categoryName = req.body.categoryName;

  // create new category with mongoose
  const category = await Category.create({
    categoryName,
  });

  console.log(category);
  //   res.status(201).redirect("/categories");
  res.status(201).json({ category });
};
