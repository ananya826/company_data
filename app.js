const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
//require('dotenv').config();
const port = 3000;
const userRoutes = require('./userRoutes/userRoute');

//app.use('/api/users', userRoutes);
const mongoURL = "mongodb://127.0.0.1:27017/Company_database";
mongoose.connect(mongoURL)
.then(() => {
    console.log("Connected to MongoDBb successfully");
})
.catch((err) => {
    console.error("Error connecting to MongoDB:", err);
});
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', userRoutes); 
app.get('/', (req, res) => {
    res.json({message:"server is working fine", status:200});
});
 
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
