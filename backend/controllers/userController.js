const User = require("../models/userModel");
const generateToken = require("../config/generateToken");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");


const allUsers = asyncHandler(async (req, res) => {
    const keyword = req.query.search
        ? {
            $or: [
                { spec1: { $regex: req.query.search, $options: "i" } },
                { spec2: { $regex: req.query.search, $options: "i" } },
                { spec3: { $regex: req.query.search, $options: "i" } }
            ],
            
        }
    : {};
    //console.log(keyword);
    const users = await User.find(keyword);
    //console.log("user", users)
    res.send(users);
});



const searchUsersByRole = asyncHandler(async (req, res) => {
  const { role, searchTerm } = req.query;

  //console.log(role, searchTerm);

  try {
    let users;
    if (role === 'educator' || role === 'student' || role === 'therapist') {
      users = await User.find({ role, name: { $regex: searchTerm, $options: 'i' } });
    } else {
      return res.status(400).json({ message: 'Invalid role' });
    }
    //console.log(users);

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, phone, role } = req.body;

    if (!name || !email || !password || !role || !phone) {
        res.status(400);
        throw new Error("Please enter all fields");
    }
    const userExist = await User.findOne({ email });
    if (userExist) {
        res.status(400);
        throw new Error("User already exists");
    }

    const user = await User.create({
        name, email, password, phone, role
    });

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            password: user.password,
            phone: user.phone,
            role: user.role,
            token: generateToken(user._id),
        });
    } else {
        res.status(400);
        throw new Error("Fail to create new user");
    }
});


const getUserDetails = asyncHandler(async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId).select('-password'); 
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});


const editUserDetails = asyncHandler(async (req, res) => {
  const { userId } = req.params;
  const {
    age,
    school_st,
    class_st,
    educator_st,
    therapist_st,
    gender,
    location,
    student_ed,
    portfolio_thep,
    work_desc_thep,
    curr_company_thep,
    experience_year_thep,
    spec1,
    spec2,
    spec3,
    students_thep,
  } = req.body;

  try {
    const user = await User.findById(userId);

    if (!user) {
      res.status(404);
      throw new Error('User not found');
    }

    // Update user fields
    user.age = age || user.age;
    user.studentDetails.school = school_st || user.studentDetails.school;
    user.studentDetails.class = class_st || user.studentDetails.class;
    user.studentDetails.educator = educator_st || user.studentDetails.educator;
    user.studentDetails.therapist = therapist_st || user.studentDetails.therapist;
    user.gender = gender || user.gender;
    user.location = location || user.location;
    user.educatorDetails.students = student_ed || user.educatorDetails.students;
    user.therapistDetails.portfolio = portfolio_thep || user.therapistDetails.portfolio;
    user.therapistDetails.work_desc = work_desc_thep || user.therapistDetails.work_desc;
    user.therapistDetails.curr_company = curr_company_thep || user.therapistDetails.curr_company;
    user.therapistDetails.experience_year = experience_year_thep || user.therapistDetails.experience_year;
    user.therapistDetails.students = students_thep || user.therapistDetails.students;
    user.therapistDetails.spec1 = spec1 || user.therapistDetails.spec1;
    user.therapistDetails.spec2 = spec2 || user.therapistDetails.spec2;
    user.therapistDetails.spec3 = spec3 || user.therapistDetails.spec3;

    const updatedUser = await user.save();

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});



const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  
  try {
    const user = await User.findOne({ email });
    
    if (user) {
      const isPasswordMatch = await user.comparePassword(password);
      //console.log(isPasswordMatch, user.password, password);
      if (isPasswordMatch || (password==user.password)) {
        res.json({
          _id: user._id,
          name: user.name,
          email: user.email,
          phone: user.phone,
          role: user.role,
          token: generateToken(user._id),
        });
      } else {
        res.status(401).json({ message: "Invalid email or password11" });
      }
    } else {
      res.status(401).json({ message: "Invalid email or password22" });
    }
  } catch (error) {
    // Handle any potential errors
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});



const searchStudents = asyncHandler(async (req, res) => {
  try {
    // Retrieve the educator's ID from the request query parameters
    const loggedInEducatorId = req.query.educatorId;

    // Query students associated with the logged-in educator
    const students = await User.find({
      'studentDetails.educator.id': loggedInEducatorId
    });

    // Add students to educatorDetails.students array if not already present
    const loggedInEducator = await User.findById(loggedInEducatorId);
    const existingStudents = loggedInEducator.educatorDetails.students.map(student => String(student.id));
    const newStudents = students.filter(student => !existingStudents.includes(String(student._id)));

    if (newStudents.length > 0) {
      loggedInEducator.educatorDetails.students.push(...newStudents);
      await loggedInEducator.save();
    }

    //console.log('Students:', students);

    // Return the list of students
    res.json(students);
  } catch (error) {
    console.error('Error searching for students:', error);
    res.status(500).json({ message: 'Internal server error' });
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
  getUserDetails,
  editUserDetails,
  searchUsersByRole,
  searchStudents
};
