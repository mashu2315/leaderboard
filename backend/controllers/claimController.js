const User = require('../models/User');
const ClaimHistory = require('../models/ClaimHistory');

// Claim points for a user
exports.claimPoints = async (req, res) => {
  const { userId } = req.body;
  if (!userId) {
    return res.status(400).json({ error: 'User ID is required' });
  }
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    const points = Math.floor(Math.random() * 10) + 1;
    user.totalPoints += points;
    await user.save();
    
    const history = new ClaimHistory({ userId, points });
    await history.save();
    
    res.status(200).json({
        success:true,
        message:"points claimed successfully ",
         userId, name: user.name, pointsAwarded: points, totalPoints: user.totalPoints });
  } catch (error) {
   res.status(500).json({ 
        success:false,
        message:"Claim points can not be fetched"
     });
  }
};