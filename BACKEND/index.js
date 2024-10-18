const router = require('./routes/route')
const express = require('express')
const morgan = require('morgan')
const cors = require("cors")

app = express()

app.use(express.json());
app.use(cors({origin:"http://localhost:3000",credentials:true}))
app.use(morgan("dev"));
app.use("/myApp",router);


//localhost:8000/myApp/


app.listen(8000,()=> {console.log("Server running on port 8000")})