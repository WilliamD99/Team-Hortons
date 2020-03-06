const express = require("express");
// init the express app in order to use express methods
const app = express();

const cors = require("cors");

app.use(cors());

app.use(express.json());
app.use(express.static("public"));

const priceRoutes = require("./routes/priceRange.js");
const costRoutes = require("./routes/costEffective");
const regionRoutes = require("./routes/region");

// app.use("/price", priceRoutes);
// app.use("/cost", costRoutes);
// app.use("/region", regionRoutes);

app.listen(5000, () => {
    console.log("server is running on port 5000");
});
