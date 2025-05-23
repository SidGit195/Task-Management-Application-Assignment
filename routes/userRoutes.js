const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const {getUserProfile, getAllUser} = require('../controllers/userController');

router.get('/:id', authMiddleware, getUserProfile);
router.get('/', authMiddleware, getAllUser);

module.exports = router;