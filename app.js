const express = require("express");
const methodOverride = require("method-override");
const app = express();
const port = 3000;

const userRouter = require("./routes/userRoutes");

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.static("public"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(methodOverride("_method"));

app.use("/users", userRouter);

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
