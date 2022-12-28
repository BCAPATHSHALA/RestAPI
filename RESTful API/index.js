//STEP: 01 Let's do the basic setup first
const express = require("express");
const app = express();
app.use(express.json());

const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const PORT = process.env.PORT;

const dbConnect = require("./dbConnect");
dbConnect();

//Step: 11 Global Middleware for each API
const globalMW = require("./Middlewares/globalMiddleWare");
app.use(globalMW);

//URL TO ACCESS: http://localhost:4200/api
const mainRouter = require("./Routes/index");
app.use("/api", mainRouter);

app.listen(PORT, () => {
  console.log(`Server Started at ${PORT}`);
});
