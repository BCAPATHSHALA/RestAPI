//STEP: 03 How to Create our Routes for the Endpoints
const router = require("express").Router();

//URL TO ACCESS: http://localhost:4200/api/routes
const routes = require("./routes");
router.use("/routes", routes);

module.exports = router;
