const dotenv = require("dotenv");
const express = require("express");
const notes = require("./data/notes");
const connectDb = require("./config/db");

dotenv.config();
const app = express();

const Port = process.env.PORT || 5000;

connectDb();

app.get("/", (req, res) => {
  res.send("API is Running");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.get("/api/notes/:id", (req, res) => {
  const noteIDData = notes.filter((data) => data._id === req.params.id);
  res.send(noteIDData);
});

app.listen(Port, () => console.log(`Server started on Port ${Port}`));
