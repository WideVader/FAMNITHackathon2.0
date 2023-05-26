const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
// const { startSession } = require('./app/models/user.model');
const User = require('./app/models/user.model');
const Role = require('./app/models/role.model');
mongoose.set("strictQuery", false);
require('dotenv').config();

const PORT = process.env.PORT || 5800;
const FRONTEND_PORT = 3000;
const db = process.env.DATABSE.replace("<PASSWORD>", process.env.DATABSE_PASSWORD);
const app = express();

app.use(cors({ credentials: true, origin: process.env.FRONTEND_PORT }))
app.use(express.json());

const roleLord = new Role({
  name: "Lord"
});

const user1 = new User({
  username: "Janko",
  email: "janko@example.com",
  password: "janko123",
  roles: [roleLord]
})

// roleLord.save()
// user1.save()

app.get('/', (req, res) => {
  res.send("Welcome");
})

app.get('/api/users/', async (req, res) => {
  try {
    const result = await User.find();
    res.send(result);
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

app.get('/api/roles/', async (req, res) => {
  const result = await Role.find();
  res.send(result);
})

app.post('/api/newuser', (req, res) => {
  console.log(req.body);
  const user = new User(req.body);
  user.save();
  res.status(201).json(user);
})

const initial = async () => {
  try {
    await mongoose.connect(db);

    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    })
  } catch (error) {
    console.log(error)
  }
}

initial();