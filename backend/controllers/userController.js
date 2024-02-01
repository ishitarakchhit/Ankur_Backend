const User = require("../models/userModel");
const generateToken = require("../config/generateToken");
const asyncHandler = require("express-async-handler");


const allUsers = asyncHandler(async (req, res) => {
    const keyword = req.query.search
        ? {
            $or: [
                { pref1: { $regex: req.query.search, $options: "i" } },
                { pref2: { $regex: req.query.search, $options: "i" } },
                { pref3: { $regex: req.query.search, $options: "i" } }
            ],
            
        }
        : {};
    const users = await User.find(keyword);

    res, send(users);
});


const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, phone } = req.body;

    if (!name || !email || !password) {
        res.status(400);
        throw new Error("Please enter all fields");
    }
    const userExist = await User.findOne({ email });
    if (userExist) {
        res.status(400);
        throw new Error("User already exists");
    }

    const user = await User.create({
        name, email, password, phone
    });

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            password: user.password,
            phone: user.phone,
            token: generateToken(user._id),
        });
    } else {
        res.status(400);
        throw new Error("Fail to create new user");
    }
});


const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            password: user.password,
            phone: user.phone,
            token: generateToken(user._id),
        });
    } else {
        res.status(401);
        throw new Error("Invalid email or password");
    }
});



const registerListener = asyncHandler(async (req, res) => {
    const { name, email, password, phone, samename, url, desc, course, college, year, pref1, pref2, pref3} = req.body;

  if ( !name || !email || !password || !samename || !phone || !url || !desc || !course || !college || !year || !pref1 || !pref2 || !pref3) {
    res.status(400);
    throw new Error("Please enter all the fields");
  }
  const listenerExist = await User.findOne({ email });
  if (listenerExist) {
    if (listenerExist) {
      res.status(400);
      throw new Error("User already exists");
    }
  }
  const listener = await User.create({
    name,
    email,
    password,
    phone,
    samename,
    url,
    desc,
    course,
    college,
    year,
    pref1,
    pref2,
    pref3
  });
  if (listener) {
    res.status(201).json({
      _id: listener._id,
      name: listener.name,
      email: listener.email,
      samename: listener.samename,
      password: listener.password,
      phone: listener.phone,
      url: listener.url,
      desc: listener.desc,
      course: listener.course,
      college: listener.college,
      year: listener.year,
      pref1: listener.pref1,
      pref2: listener.pref2,
      pref3: listener.pref3,
      token: generateToken(listener._id),
    });
  } else {
    res.status(400);
    throw new Error("Fail to create new user");
  }
});



const authListener = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const listener = await User.findOne({ email });
  if (listener && (await listener.matchPassword(password))) {
    res.json({
      _id: listener._id,
      name: listener.name,
      email: listener.email,
      password: listener.password,
      samename: listener.samename,
      phone: listener.phone,
      url: listener.url,
      desc: listener.desc,
      course: listener.course,
      college: listener.college,
      year: listener.year,
      pref1: listener.pref1,
      pref2: listener.pref2,
      pref3: listener.pref3,
      token: generateToken(listener._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});



module.exports = {
  registerUser,
  authUser,
  registerListener,
  authListener,
  allUsers,
};
