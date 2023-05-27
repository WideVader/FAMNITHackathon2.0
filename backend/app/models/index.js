const mongoose = require('mongoose');
const refreshToken = require('./refreshToken.model')
const user = require('./user.model')
const listing = require('./listing.model')
// mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.role = require("./role.model");

// db.ROLES = ["user", "lord"];kojem se educiraju studenti o financial literacy ovdje u kopru



module.exports = {
    user,
    refreshToken,
    listing
};
{/* <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC72f9xNJZm6ZB-5jfgT6Ld3tZc1zjMrpc&callback=initMap"     async defer></script>
*/}
