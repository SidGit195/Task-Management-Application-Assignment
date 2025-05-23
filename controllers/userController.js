const User = require('../models/User');

const getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select('-password');

        if(!user){
            return res.status(404).json({msg: 'User not found'});
        }

        res.status(200).json(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg: 'Server Error'});
    }
}

const getAllUser = async (req, res) => {
    try {
        const users = await User.find().select('-password');

        if(!users){
            return res.status(404).json({msg: 'Users not found'});
        }

        return res.status(200).json(users);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg: 'Server Error'});
    }
}

module.exports = { getUserProfile, getAllUser };