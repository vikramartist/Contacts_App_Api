const express = require("express");
const errorHandler = require("./middleware/errorHandler.js");
const connectDb = require("./config/dbConnection.js");
const dotenv = require("dotenv").config();

const app = express();
connectDb();

const port = process.env.PORT || 5000;
app.use(express.json());

app.use("/api/contacts", require("./routes/ContactRoute.js"));
app.use("/api/users", require("./routes/userRoute"));
app.use("/", (req, res) => {
  return res.json({ message: "Welcome to the Contacts App Api" });
});
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
