const express = require('express');
const cors = require('cors');
const db = require("./app/models");
require('dotenv').config()

const FRONTEND_PORT = 3000;
const Role = db.role;
const app = express();

app.use(cors({credentials: true, origin: process.env.FRONTEND_PORT}))
app.use(express.json());

db.mongoose
  .connect(`mongodb://localhost:27017/Hackathon.user`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'user' to roles collection");
      });

      new Role({
        name: "lord"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'lord' to roles collection");
      });
    }
  });
}

const PORT = process.env.PORT || 5800;

app.get('/',(req, res)=>{
    res.send("Home");
})

app.listen(PORT,()=>{
    console.log(`Severe listening on port ${PORT}`);
})