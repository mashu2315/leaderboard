const User = require('../models/User');
const ClaimHistory = require('../models/ClaimHistory');

// Get leaderboard
exports.getLeaderboard = async (req, res) => {
  try {
    const users = await User.find().sort({ totalPoints: -1, name: 1 });
    let currentRank = 1;
    let lastPoints = null;
    const leaderboard = users.map((user, index) => {
      if (lastPoints !== user.totalPoints) {
        currentRank = index + 1;
        lastPoints = user.totalPoints;
      }
      return { rank: currentRank, name: user.name, totalPoints: user.totalPoints };
    });
    res.json(leaderboard);
  } catch (error) {
    res.status(500).json({ 
        success:false,
        error: 'Error occured in getting leaderboard' });
  }
};

// Get claim history
exports.getClaimHistory = async (req, res) => {
  try {
    const history = await ClaimHistory.find()
      .populate('userId', 'name')
      .sort({ timestamp: -1 })
      .limit(50);
    const formattedHistory = history.map(record => ({
      userName: record.userId.name,
      points: record.points,
      timestamp: record.timestamp
    }));
    res.json(formattedHistory);
  } catch (error) {
    res.status(500).json({ 
        success:false,
        error: 'Error occured in claiming history ' });
  }
};