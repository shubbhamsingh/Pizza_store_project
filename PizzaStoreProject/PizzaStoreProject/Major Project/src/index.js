const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");

const app = express();
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

mongoose.connect("mongodb://localhost:27017/pizzastore", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const itemSchema = new mongoose.Schema({
  id: String,
  name: String,
  price: Number,
});

const Item = mongoose.model("Item", itemSchema);

// Add a new item
app.post("/items", async (req, res) => {
  const item = new Item(req.body);
  await item.save();
  res.status(201).send(item);
});

// Retrieve all items
app.get("/items", async (req, res) => {
  const items = await Item.find();
  res.render("index", { items });
});

// Retrieve a specific item by its ID
app.get("/items/:id", async (req, res) => {
  const item = await Item.findById(req.params.id);
  if (item) {
    res.send(item);
  } else {
    res.status(404).send({ message: "Item not found" });
  }
});

// Update an existing item by its ID
app.put("/items/:id", async (req, res) => {
  const item = await Item.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (item) {
    res.send(item);
  } else {
    res.status(404).send({ message: "Item not found" });
  }
});

// Delete an item by its ID
app.delete("/items/:id", async (req, res) => {
  const item = await Item.findByIdAndDelete(req.params.id);
  if (item) {
    res.status(204).send();
  } else {
    res.status(404).send({ message: "Item not found" });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
