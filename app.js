const express = require("express");
const app = express();
const path = require("path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

// ROUTE
app.get("/", (req, res) => {
  res.render("pages/home");
});

app.get("/login", (req, res) => {
  res.render("pages/login");
});

app.get("/upload", (req, res) => {
  res.render("pages/upload");
});

app.get("/edit", (req, res) => {
  res.render("pages/edit");
});

app.get("/library", (req, res) => {
  res.render("pages/library");
});

// Bus su ID
app.get("/reading", (req, res) => {
  res.render("pages/reading");
});

// Bus su ID
app.get("/review", (req, res) => {
  res.render("pages/review");
});

// SERVER
const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
