import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      " mongodb+srv://cdabrief@cluster0.aq1vfkm.mongodb.net/brief"
    );

    console.log("DB connected");
  } catch (err) {
    console.log("Error to connect with db", err);
  }
};
export default connectDB;
