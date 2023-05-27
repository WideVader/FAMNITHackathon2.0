const express = require('express');
const cors = require('cors');
const axios = require('axios');
const mongoose = require('mongoose');
const User = require('./app/models/user.model');
const Role = require('./app/models/role.model');
const Listing = require('./app/models/listing.model');
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

// const list1 = new Listing({
//   adress: "Veluščkova ulica 7, 6000 Koper",
//   price: 250,
//   url: "placeholder",
//   title: "Koper stan",
//   amenities: [
//       {wifi: true},
//       {breakfast: false},
//       {parking:true},
//       {pets:true}
//   ]
// })

// list1.save();

// roleLord.save()
// user1.save()


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

app.get('/api/listings/', async (req, res) => {
  // const result = await Role.find();
  // res.send(result);

  const responses = [];
  try {
    const result = await Listing.find({ adress: { $regex: `${req.body.adress}`, $options: 'i' } });

    for (let i = 0; i < result.length; i++) {
      const element = result[i];
      const baseUrl = 'https://nominatim.openstreetmap.org/search';
      const params = {
        q: element.adress,
        format: 'json',
        limit: 1
      };

      await axios.get(baseUrl, { params })
        .then(async (response) => {
          if (response.data.length === 0) {
            console.error('No results found for the address:', element.adress);
            // return;
          }
          //IT TOOK 3 HOURS TO MAKE THESE AWAIT ASYNC WORK, NEVER AGAIN PLEASE!!!!
          const { lat, lon } = response.data[0];
          await responses.push(await universal(lat, lon, req.body.filter, element.adress))

        })
        .catch((error) => {
          console.error('Error occurred while geocoding:', error);
        });

    }

    res.send(responses)
    return

  } catch (error) {
    res.status(500).json({ error: error.message })
  }

  async function sendOverpassRequest(query, amenities, rad) {
    try {
      const response = await axios.get('https://overpass-api.de/api/interpreter', {
        params: {
          data: query,
        },
      });
      if (rad != 0 && response.data.elements.length > 0) {
        return response.data.elements[0].lat + ", " + response.data.elements[0].lon;
      }
      return null
    } catch (error) {
      console.error('Error occurred while sending Overpass request:', error);
    }
  }

  async function universal(lat, lon, rad, el) {
    try {
      let amenities = ["'shop'='convenience'", "'amenity'='restaurant'", "'highway'='bus_stop'", "'tourism'='museum'", "'leisure'='park'", "'amenity'='school'", "'leisure'='stadium'", "'leisure'='fitness_centre'", "'amenity'='fuel'", "'aeroway'='aerodrome'"]
      let response = []
      let responseObj = { adress: el, filters: [] }
      let flag = true;
      for(let i = 0; i < amenities.length; i++){
        if(rad[i]!=0){
          const query = `[out:json];
          node[${amenities[i]}](around:${rad[i]},${lat},${lon});
          out;`;
          const resultingSmt = await sendOverpassRequest(query, amenities[i], rad[i])
          if (resultingSmt == null) {
            flag = false
            throw new Error('BreakException');
          }
        }
      }
      for (let i = 0; i < amenities.length; i++) {
        if (rad[i] == 0) {
          const query = `[out:json];
          node[${amenities[i]}](around:2000,${lat},${lon});
          out;`;
          const resultingSmt = await sendOverpassRequest(query, amenities[i], 2000)
          if (resultingSmt != null)
            responseObj.filters.push(amenities[i].split("=").pop())
          // response.push({ adress: el, amenities: amenities[i], latLonString: resultingSmt });
        }
        else {
          const query = `[out:json];
          node[${amenities[i]}](around:${rad[i]},${lat},${lon});
          out;`;
          const resultingSmt = await sendOverpassRequest(query, amenities[i], rad[i])
          if (resultingSmt == null) {
            flag = false
            throw new Error('BreakException');
          }
          responseObj.filters.push(amenities[i].split("=").pop())

          // response.push({ adress: el, amenities: amenities[i], latLonString: resultingSmt });
        }

      }
      response.push(responseObj)
      if (!flag) {
        console.log("FLAG FALSE")
        return []
      }
      console.log("FLAG TRUE")
      return response
    } catch (error) {
      console.log("error")
    }
  }
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


