const express = require("express");
// init the express app in order to use express methods
const app = express();

const cors = require("cors");

app.use(cors());

app.use(express.json());
app.use(express.static("public"));

const topRoutes = require("./routes/topFive");
const range1Routes = require("./routes/range1");
const range2Routes = require("./routes/range2");
const range3Routes = require("./routes/range3");
const range4Routes = require("./routes/range4");

app.use("/top", topRoutes);
app.use("/range1", range1Routes);
app.use("/range2", range2Routes);
app.use("/range3", range3Routes);
app.use("/range4", range4Routes);
// app.use("/region", regionRoutes);

app.listen(5000, () => {
  console.log("server is running on port 5000");
});
