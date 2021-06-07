const express = require("express");
const app = express();
require("dotenv").config();

//memanggil database dengan env
const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

//mengecek koneksi error
mongoose.connection.on("error", (err) => {
  console.log("Mongoose Connection ERROR: " + err.message);
});

//mengecek koneksi tersambung
mongoose.connection.once("open", () => {
  console.log("MongoDB Connected!");
});

//Bring in the models
require("./src/models/operator");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Setup Cross Origin
app.use(require("cors")());

//Bring in the routes
app.use("/operator", require("./src/routers/operator"));
app.use("/operator", require("./src/routers/operator"));

//Setup Error Handlers
const errorHandlers = require("./src/handlers/errorHandlers");
app.use(errorHandlers.notFound);
app.use(errorHandlers.mongoseErrors);
if (process.env.ENV === "DEVELOPMENT") {
  app.use(errorHandlers.developmentErrors);
} else {
  app.use(errorHandlers.productionErrors);
}

//menjalankan server dengan port 8000
app.listen(4000, () => {
  console.log("Server listening on port 4000");
});