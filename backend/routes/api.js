const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const claimController = require('../controllers/claimController');
const leaderboardController = require('../controllers/leaderboardController');

// User routes
router.get('/users', userController.getUsers);
router.post('/users', userController.addUser);
router.post('/defaultusers', userController.initializeUsers);

// Claim points route
router.post('/claim', claimController.claimPoints);

// Leaderboard and history routes
router.get('/leaderboard', leaderboardController.getLeaderboard);
router.get('/claim-history', leaderboardController.getClaimHistory);

module.exports = router;