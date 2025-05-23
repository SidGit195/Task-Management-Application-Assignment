const mongoose = require('mongoose');
const User = require('./User');

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,        
    },
    description: {
        type: String,
        required: true
    },
    dueDate: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ['Pending', 'Started', 'Completed'],
        default: 'Pending'
    },
    assignedUserId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, 
{ timestamps: true}
);

module.exports = mongoose.model('Task', taskSchema);