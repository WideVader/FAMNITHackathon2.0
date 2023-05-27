const mongoose = require('mongoose');
const refreshToken = require('./refreshToken.model')
const user = require('./user.model')
// mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

user = require("./user.model");
db.role = require("./role.model");
refreshToken = require("./refreshToken.model");

// db.ROLES = ["user", "lord"];



module.exports = {
    refreshToken
};
