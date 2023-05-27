const mongoose = require("mongoose");

const refreshTokenSchema = new mongoose.Schema({
  owner: {type: Schema.Types.ObjectId, ref: "User"}
})

const RefreshToken = mongoose.model("refreshToken", refreshTokenSchema);

module.exports = RefreshToken;
