const mongoose = require('mongoose');
const express = require ('express');
require('dotenv').config();
//import routes
const userRoutes = require('./routes/user');

// app
const app = express();

// db
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true, 
    useCreateIndex: true, 
    useUnifiedTopology: true
}).then(()=> console.log('DB Connected'));

// routes middleware
app.use("/api", userRoutes);


const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Sever is running on port ${port}`);
});