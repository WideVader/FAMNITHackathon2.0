const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { startSession } = require('./app/models/user.model');
mongoose.set("strictQuery", false);
require('dotenv').config()

const PORT = process.env.PORT || 5800;
const FRONTEND_PORT = 3000;
const db = process.env.DATABSE.replace("<PASSWORD>",process.env.DATABSE_PASSWORD);
const Role = db.role;
const app = express();

app.use(cors({ credentials: true, origin: process.env.FRONTEND_PORT }))
app.use(express.json());

// const db = process.env.DATABASE.replace(
//   '<PASSWORD>',
//   process.env.DATABASE_PASSWORD
// );


app.get('/', (req, res) => {
  res.send("Home");
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

// db.mongoose
//   .connect(`mongodb+srv://Hackathon:Janko@cluster0.hws3tel.mongodb.net/`, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   })
//   .then(() => {
//     console.log("Successfully connect to MongoDB.");
//     initial();
//   })
// .catch(err => {
//   console.error("Connection error", err);
//   process.exit();
// });

// function initial() {
//   Role.estimatedDocumentCount((err, count) => {
//     if (!err && count === 0) {
//       new Role({
//         name: "user"
//       }).save(err => {
//         if (err) {
//           console.log("error", err);
//         }

//         console.log("added 'user' to roles collection");
//       });

//       new Role({
//         name: "lord"
//       }).save(err => {
//         if (err) {
//           console.log("error", err);
//         }

//         console.log("added 'lord' to roles collection");
//       });
//     }
//   });
// }

