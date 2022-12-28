/*
STEP:04 How to Write our Endpoints
Now, let's write our endpoints here in this routes file. We will have five routes for the following actions:

1. Posting data to Database.
2. Getting all the data from the Database.
3. Getting data based on the ID.
4. Updating data based on the ID.
5. Deleting data based on the ID.
*/

const router = require("express").Router();
const Model = require("../Model/model");
const controllers = require("../Controllers/controller");

//URL TO ACCESS: http://localhost:4200/api/routes/post
//Post Method 📝Step:06 How to Post Data to the Database
router.post("/post", controllers.postData);

//URL TO ACCESS: http://localhost:4200/api/routes/getAll
//Get all Method 📝Step:07 How to Get All the Data
router.get("/getAll", controllers.getAllData);

//URL TO ACCESS: http://localhost:4200/api/routes/getOne/123
//Get by ID Method 📝Step:08 How to Get Data Based on the ID
router.get("/getOne/:id", controllers.getOneData);

//URL TO ACCESS: http://localhost:4200/api/routes/update/123
//Update by ID Method 📝Step:09 How to Update Based on the ID
router.patch("/update/:id", controllers.updateData);

//URL TO ACCESS: http://localhost:4200/api/routes/delete/123
//Delete by ID Method 📝Step:10 How to Deleted Based on the ID
router.delete("/delete/:id", controllers.deleteData);

module.exports = router;
