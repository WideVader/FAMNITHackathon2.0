const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema({
    adress: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    amenities: [{
        wifi: { type: Boolean }
    },
    {
        breakfast: { type: Boolean },
    },
    {
        parking: { type: Boolean },
    },
    {
        pets: { ype: Boolean },
    }
    ]
})

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;