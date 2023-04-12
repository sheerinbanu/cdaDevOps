import express from "express";
import path from "path";

const __dirname = path.resolve();

// Create express App
const app = express();

// Set views engine
app.set("view engine", "ejs");

// Set views directory
app.set("views", "views");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("Hello, world!");
});
app.listen(8082, () => {
  console.log("listening on port 8082");
});
