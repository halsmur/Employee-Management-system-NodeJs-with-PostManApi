const express= require('express');
const bodyParser=require('bodyParser');
const dotenv= require('dotenv');
const app= express();
app.use(bodyParser.json());
app.get('/employees', (req,res) => {
    res.send("Employees");
});
const connectDB=require('./config/db');
dotenv.config({path:'./config/config.env'});
connectDB();
app.use('/',require('./routes/index'));
app.listen(3000);
