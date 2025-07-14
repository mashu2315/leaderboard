const User = require('../models/User');

// Get all users
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find().sort({ name: 1 });
    res.status(200).json({
        success:true,
        message:"User fetched successfully",
        users,
    });
  } catch (error) {
    res.status(500).json({ 
        success:false,
        message:"Can't get users",
        error:error
     });
  }
};

// Add a new user
exports.addUser = async (req, res) => {
  const { name } = req.body;
  if (!name || name.trim() === '') {
    return res.status(400).json({ error: 'Name is required' });
  }
  try {
    const existingUser = await User.findOne({ name });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }
    const user = new User({ name });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ 
        success:false,
        message:"error in adding new user",
        error:error
     });
  }
};

// Initialize default users
exports.initializeUsers = async () => {
  const defaultUsers = [
    'Rahul', 'Kamal', 'Sanak', 'Priya', 'Amit', 'Sneha', 'Vikram', 'Anjali', 'Rohit', 'Neha'
  ];
  const userCount = await User.countDocuments();
  if (userCount === 0) {
    await User.insertMany(defaultUsers.map(name => ({ name })));
    console.log('Initialized default users');
  }
};