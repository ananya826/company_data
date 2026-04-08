const express = require('express');
const router = express.Router();
const Users = require('../models/user');

/*router.get('/Users', async (req, res) => {
    try {
     /*   const users = await User.find();    
        res.json(users);
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ error: "Internal Server Error" });
    } */
  /* let condition = {};
   let fetchedUsers = await User.find(condition).exec();
   if(!fetchedUsers || fetchedUsers.length === 0){
    return res.status(404).json({message:"No users found"});
   }
   else{
    return res.status(200).json(fetchedUsers);
   }
} catch (error) {
    console.error("Error fetching users:", error);
    return res.status(500).json({ error: "Internal Server Error" });
}
}) */
router.get('/users', async (req, res) => {
    try {
            let condition = {};
            let fetchedUsers = await Users.find(condition).exec();
            if(!fetchedUsers || fetchedUsers.length === 0){
                return res.status(404).json({message:"No users found"});
            }
            return res.status(200).json(fetchedUsers);
        } catch (error) {
            console.error("Error fetching users:", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    });

module.exports = router;


