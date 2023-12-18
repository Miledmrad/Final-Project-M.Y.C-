const express = require("express");
const {getAllUsers,  createUser, updateUser, deleteUser, authenticateUser,
} = require("../services/usersSqlz");
const router = express.Router();

router.get("/getAllusers", async(req, res) =>{
  const result = await getAllUsers();
  if(result){
    res.status(200).json(result);
  }else{
    res.status(500).json({message: "error getting users"});
  }
});

router.post("/insertUser", async (req, res)=>{
  const {firstName, lastName, username, password, email,  address,  dob} = req.body;
  const result = await createUser(firstName, lastName, username, password, email,  address, dob);
  if(result){
    res.status(200).json({message: "User inserted", result});
  }else{
    res.status(500).json({message: "error inserting User"});
  }
});


router.post("/updateuser", async (req, res) => {
  const {id, firstName, lastName, username, password, email, mobile, address, gender, dob} = req.body;
  const result = await updateUser(id, firstName, lastName, username, password, email, mobile, address, gender, dob);
  if(result){
    res.status(200).json({message: "user updated", result});
  }else{
    res.status(500).json({message: "error updating user"});
  }
})

router.post("/deleteuser", async (req, res) =>{
  const {id} = req.body;
  const result = await deleteUser(id);
  if(result){
    res.status(200).json({message: "user deleted", result});
  }else{
    res.status(500).json({message: "error deleting user"});
  }
})

router.post("/authenticateUser", async (req, res)=>{
  const {username, password} = req.body;
  const result = await authenticateUser(username, password);
  res.status(200).json(result);
})

module.exports = router;
