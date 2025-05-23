const Task = require('../models/Task');
const User = require('../models/User');

const getAllTasks = async (req, res) => {
    try {
      const { status, assignedUserId, page = 1, limit = 10 } = req.query;
      const filter = {};
  
      if (status) filter.status = status;
      if (assignedUserId) filter.assignedUserId = assignedUserId;
  
      const tasks = await Task.find(filter)
        .skip((page - 1) * limit)
        .limit(parseInt(limit));
  
      const total = await Task.countDocuments(filter);
  
      res.status(200).json({
        page: Number(page),
        totalPages: Math.ceil(total / limit),
        totalTasks: total,
        tasks,
      });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

const getTaskById = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);

        if(!task){
            return res.status(404).json({msg: 'Task not found'});
        }

        return res.status(200).json(task);
    } catch (error) {
        console.error(error);
        res.status(500).json({msg: 'Server Error'});
    }
}

const createTask = async (req, res) => {
    try {
        const { assignedUserId } = req.body;

        const assignedUser = await User.findById(assignedUserId);

        if(!assignedUser){
            return res.status(404).json({msg: 'Assigned User not found'});
        }

        const task = new Task({...req.body});
        await task.save();

        res.status(201).json({msg: 'Task Created Successfully', task});
    } catch (error) {
        console.error(error);
        res.status(500).json({msg: 'Server Error'});
    }
}

const updateTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);

        if(!task){
            return res.status(404).json({msg: 'Task not found'});
        }
        
        const { assignedUserId } = req.body;

        const assignedUser = await User.findById(assignedUserId);

        if(!assignedUser){
            return res.status(404).json({msg: 'Assigned User not found'});
        }

        const updateTask = await Task.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        );

        res.status(200).json({msg: 'Task Updated', updateTask});
    } catch (error) {
        console.error(error);
        res.status(500).json({msg: 'Server Error'});
    }
}

const deleteTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);

        if(!task){
            return res.status(404).json({msg: 'Task not found'});
        }

        res.status(200).json({msg: 'Task deleted successfully'});
    } catch (error) {
        console.error(error);
        res.status(500).json({msg: 'Server Error'});
    }
}


module.exports = { getAllTasks, getTaskById, createTask, updateTask, deleteTask };