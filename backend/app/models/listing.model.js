const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
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
    url: {
        type: String,
        required: true,
    },
    // filters: [{
    //     convenience:{type: Boolean},
    //     restaurant:{type: Boolean},
    //     bus_stop:{type: Boolean},
    //     museum:{type: Boolean},
    //     park:{type: Boolean},
    //     school:{type: Boolean},
    //     stadium:{type: Boolean},
    //     fitness_centre:{type: Boolean},
    //     fuel:{type: Boolean},
    //     aerodrome:{type: Boolean}
    // }],
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