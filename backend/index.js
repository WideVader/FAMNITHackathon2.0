const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./app/models/user.model');
const Role = require('./app/models/role.model');
const routes = require('./app/routes');

mongoose.set("strictQuery", false);
require('dotenv').config();

const PORT = process.env.PORT || 5800;
const FRONTEND_PORT = 3000;
const db = process.env.DATABSE.replace("<PASSWORD>", process.env.DATABSE_PASSWORD);
const app = express();

app.use(cors({ origin: process.env.FRONTEND_PORT }))
app.use(express.json());

// const roleLord = new Role({
//   name: "Lord"
// });

// const user1 = new User({
//   username: "Branko",
//   email: "branko@example.com",
//   password: "janko123",
//   roles: []
// })

// roleLord.save()
// user1.save()


/////////////////////
// User Connection //
/////////////////////

// app.post('/register', async (req, res) => {
//   const user = new User(req.body);
//   try {
//     await user.save();
//     res.status(201).json(user);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// })

// app.post('/login', (req, res) => {
//   const user = new User(req.body);
//   user.save();
//   res.status(201).json({ user });
// })

///////////
// API's //
///////////

// app.use('/api',routes);

app.get('/api/users/', async (req, res) => {
  try {
    const result = await User.find();
    res.send(result);
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

app.get('/api/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user)
      res.status(404).json({ error: "User not found." });
    else
      res.json({ user });
    // res.json({user})
  } catch (error) {
    res.status(500).json({ error: "Something went wrong." });
  }
})

app.put('/api/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOneAndReplace({ _id: id }, req.body, { new: true });
    res.json({ user });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong." });
  }
})

app.patch('/api/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOneAndUpdate({ _id: id }, req.body, { new: true });
    res.json({ user });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong." });
  }
})

app.delete('/api/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await User.deleteOne({ _id: id });
    res.json({ deletedCount: result.deletedCount });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong." });
  }
})

app.post('/api/users/new', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
})

app.get('/api/roles/', async (req, res) => {
  const result = await Role.find();
  res.send(result);
})

///////////////////////
//  Init the server  //
///////////////////////

const init = async () => {
  try {
    await mongoose.connect(db)
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    })
  } catch (error) {
    console.log(error)
  }
}

init();