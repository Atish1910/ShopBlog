const express = require("express");
const cors = require("cors");
const sequelize = require("./config/db");

require("dotenv").config();

const blogRoutes = require("./routes/blogRoutes");

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());

const PORT = process.env.PORT || 4000;

app.use("/api/blogs", blogRoutes);

const startServer = async () => {
    try {
        await sequelize.sync();

        console.log("Database Connected");

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });

    } catch (error) {
        console.log(error);
    }
};

startServer();