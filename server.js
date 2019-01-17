const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const logger = require("morgan");

const app = express();
const users = require("./routes/api/users");
const insta = require("./routes/api/insta");

//middleware
app.use(cors("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger());

//connect mongo
const db = require("./config/keys").mongoURI;
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

//connect routes
app.use("/api/users", users);
app.use("/api/insta", insta);

// Serve static assets if in production
// if (process.env.NODE_ENV === "production") {
//   // Set static folder
//   app.use(express.static("client/build"));
//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
//   });
// }

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build")); // serve the static react app
  app.get(/^\/(?!api).*/, (req, res) => {
    // don't serve api routes to react app
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });
  console.log("Serving React App...");
}

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server running on port ${port}`));
