const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

const Port = process.env.PORT || 5000;

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
