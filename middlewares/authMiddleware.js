const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

module.exports = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];

        if(!token){
            return res.status(401).json({msg: 'token not found'});
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findById(decoded.userId).select('-password');

        if(!user){
            return res.status(404).json({msg: 'User not found'});
        }

        req.user = user;
        next();
    } catch (error) {
        console.error(error.message);
        res.status(401).json({msg: 'Token is not valid'});
    }
}