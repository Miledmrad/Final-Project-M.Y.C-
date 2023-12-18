const express = require('express');
require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./DB/db')


const app = express();
port = process.env.PORT || 3001;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({origin: '*'}));


const  connect =db.connect();
const usersqlz = require("./routes/userSqlz");


app.get("/", (req, res)=>{
    res.json({message: "ok from the server side."})
});


app.use("/api/usersqlz", usersqlz);

app.listen(port, () =>{
    console.log(`my app is running on the port ${port}`);
    console.log(connect);
})


