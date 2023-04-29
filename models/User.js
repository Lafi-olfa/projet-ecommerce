const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  fullName: String,
  email: String,
  password: String,
  adresse: String,
  phone: String,

  userRoles: {
    type: String,
    roles: ["user", "admin"],
    required: true,

    default: "admin",
  },
});
module.exports = mongoose.model("user", userSchema);
