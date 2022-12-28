const Model = require("../Model/model");

//Post Method 📝Step:06 How to Post Data to the Database
const postData = async (req, res) => {
  // res.send("Post API");
  const data = new Model({
    name: req.body.name,
    age: req.body.age,
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//Get all Method 📝Step:07 How to Get All the Data
const getAllData = async (req, res) => {
  //   res.send("Get All API");
  try {
    const data = await Model.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Get by ID Method 📝Step:08 How to Get Data Based on the ID
const getOneData = async (req, res) => {
  //   res.send("Get by ID API");
  //   res.send(req.params.id);
  try {
    const data = await Model.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Update by ID Method 📝Step:09 How to Update Based on the ID
const updateData = async (req, res) => {
  //   res.send("Update by ID API");
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await Model.findByIdAndUpdate(id, updatedData, options);
    res.send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//Delete by ID Method 📝Step:10 How to Deleted Based on the ID
const deleteData = async (req, res) => {
  //   res.send("Delete by ID API");
  try {
    const id = req.params.id;
    const data = await Model.findByIdAndDelete(id);
    res.send(`Document with ${data.name} has been deleted..`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { postData, getAllData, updateData, getOneData, deleteData };
