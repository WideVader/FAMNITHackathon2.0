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

app.use(cors({ origin: "*" }))
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

app.post('/api/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user)
      res.status(404).json({ error: "User not found." });
    else {
      if (password == user.password)
        res.json({ user });
      else
        res.status(401).json({ error: "User not authenticated." });
    }
    // res.json({user})
  } catch (error) {
    res.status(500).json({ error: "Something went wrong." });
  }
})

app.post('/api/recommend', async (req, res) => {
  try {
    const { _id } = req.body;
    let list;
    const user = await User.findOne({ _id });
    if (!_id)
      res.status(403).json({ error: "You are not logged in or i messed up with backend." });
    else {
      if (user.age < 20 && user.gender == "female") {
        list = await Listing.find({ "price": { $lt: 300 } });
      }
      else if (user.age < 20 && user.gender == "male") {
        list = await Listing.find({ "price": { $lt: 400 } });
      }
      else if (user.age >= 20 && user.gender == "female") {
        list = await Listing.find({ "price": { $lt: 700 } });
      }
      else if (user.age >= 20 && user.gender == "male") {
        list = await Listing.find({ "price": { $lt: 900 } });
      }
      const arrayOfArrays = list.map(obj => [obj]);
      res.json(arrayOfArrays);
    }
  } catch (error) {
    res.status(500).json({ error: "Something went wrong." });
  }
})

app.delete('/api/users/new', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await User.deleteOne({ _id: id });
    res.json({ deletedCount: result.deletedCount });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong." });
  }
})

app.post('/api/users/new', async (req, res) => {

  const User = require('./app/models/user.model');
  const Listing = require('./app/models/listing.model');

  // Assuming you have retrieved the user preferences and retrieved the listings from the database

  // Calculate recommendation scores for each listing
  const recommendations = listings.map((listing) => {
    // Calculate the recommendation score based on similarity between user preferences and listing attributes
    const recommendationScore = calculateRecommendationScore(user.preferences, listing.amenities);

    // Assign the recommendation score to the listing
    return { listing, recommendationScore };
  });

  // Sort the recommendations based on the recommendation score in descending order
  recommendations.sort((a, b) => b.recommendationScore - a.recommendationScore);

  // Get the top recommendation
  const topRecommendation = recommendations[0];

  // Return the top recommendation to the user
  res.json({ recommendation: topRecommendation });

  function calculateRecommendationScore(userPreferences, listingAmenities) {
    // Assign weights to each amenity attribute based on importance
    const weights = {
      wifi: 0.8,
      breakfast: 0.6,
      parking: 0.7,
      pets: 0.5,
    };

    // Calculate the recommendation score based on similarity between user preferences and listing amenities
    let recommendationScore = 0;
    Object.keys(userPreferences).forEach((preference) => {
      if (listingAmenities[preference] === userPreferences[preference]) {
        recommendationScore += weights[preference];
      }
    });

    return recommendationScore;
  }
  // try {
  //   const user = new User(req.body);
  //   await user.save();
  //   res.status(201).json(user);
  // } catch (error) {
  //   res.status(400).json({ error: error.message });
  // }
})

app.post('/api/listings/', async (req, res) => {
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
          await responses.push(await universal(lat, lon, req.body.filter, element))

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
      let responseObj = { _id: el._id, adress: el.adress, price: el.price, image: el.image, title: el.title, filters: [], amenities: el.amenities, url: el.url }
      let flag = true;
      for (let i = 0; i < amenities.length; i++) {
        if (rad[i] != 0) {
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


