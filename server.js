require("dotenv").config();

const express = require("express");
const noteRoutes = require('./router/note-router');

app = express();
const connectToDB = require("./database/db");

connectToDB();

// middleware
app.use(express.json());

// all routes
app.use('/api/notes', noteRoutes);


const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
