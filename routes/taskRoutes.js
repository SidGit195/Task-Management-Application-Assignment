const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();
const {getAllTasks, getTaskById, createTask, updateTask, deleteTask} = require('../controllers/taskController');


router.get('/', authMiddleware, getAllTasks);
router.get('/:id', authMiddleware, getTaskById);

router.post('/', authMiddleware, createTask);

router.put('/:id', authMiddleware, updateTask);

router.delete('/:id', authMiddleware, deleteTask);

module.exports = router;