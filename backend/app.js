const express = require("express");
const cors = require("cors");
const path = require("path");
const helmet = require("helmet");
const morgan = require("morgan");
const sequelize = require("./config/db");
require("dotenv").config();
const blogRoutes = require("./routes/blogRoutes");

const app = express();
app.use(cors({
  origin: "*"
})); // api call can access globally
app.use(
  helmet({
    crossOriginResourcePolicy: {
      policy: "cross-origin",
    },
  }),
);
app.use(morgan()); // api speed
app.use(express.json()); 
app.use("/uploads", express.static(path.join(__dirname, "uploads"))); // serve stac folder to public

const PORT = process.env.PORT || 4000;

app.use("/api/blogs", blogRoutes); //specific route mount

const startServer = async () => {
  try {
    await sequelize.sync(); // connecting to db
    console.log("Database Connected");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
