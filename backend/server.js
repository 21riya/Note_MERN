const dotenv = require("dotenv");
const express = require("express");
const notes = require("./data/notes");
const connectDb = require("./config/db");
const userRoute = require("./routes/userRoutes");
const { errorHandler, notFound } = require("./middlewares/errorMiddleware");

dotenv.config();
const app = express();

const Port = process.env.PORT || 5000;

connectDb();
app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("API is Running");
// });

// app.get("/api/notes", (req, res) => {
//   res.json(notes);
// });

app.use("/api/users", userRoute);

app.use(notFound);
app.use(errorHandler);

app.listen(Port, () => console.log(`Server started on Port ${Port}`));
