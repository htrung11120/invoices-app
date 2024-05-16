const cors = require("cors");
const express = require("express");
const Client = require("./models/client");
const Invoice = require("./models/invoice");
require("./models/db");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173", // Allow requests from this origin
  })
);

app.get("/invoices", async (req, res) => {
  try {
    const invoices = await Invoice.find({}).populate("client").exec();
    res.send(invoices);
  } catch (error) {
    console.error("Error fetching invoices:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Server is running on port ${port}`);
});
