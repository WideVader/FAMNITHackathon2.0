const express = require('express');
const cors = require('cors');
require('dotenv').config()
const FRONTEND_PORT = 3000;

const app = express();

app.use(cors({credentials: true, origin: process.env.FRONTEND_PORT}))
app.use(express.json());

const PORT = process.env.PORT || 5800;

app.get('/',(req, res)=>{
    res.send("Home");
})

app.listen(PORT,()=>{
    console.log(`Severe listening on port ${PORT}`);
})

