const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name"]
    },
    email: {
        type: String,
        required: [true, "Please enter your email"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Please enter your password"],
    },
    phone: {
        type: String,
        required: [true, "Please enter your phone number"]
    },
    samename: {
      type: String,
      default: "Anonymous",
    },
    url: {
      type: String,
      default: "*%$*&###",
    },
    desc: {
      type: String,
      default: "*%$*&###",
    },
    course: {
      type: String,
      default: "*%$*&###",
    },
    college: {
      type: String,
      default: "*%$*&###",
    },
    year: {
      type: String,
      default: "*%$*&###",
    },
    pref1: {
      type: String,
      default: "*%$*&###",
    },
    pref2: {
      type: String,
      default: "*%$*&###",
    },
    pref3: {
      type: String,
      default: "*%$*&###",
    },
    status: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);


UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

UserSchema.pre("save", async function (next) {
  if (!this.isModified) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
