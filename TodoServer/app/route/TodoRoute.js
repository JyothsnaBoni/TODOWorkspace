/* Load Modules */
const express = require('express');
const router = express.Router();

/* Load controller */
const TodoController = require('./app/control/TodoController');
const todoController = new TodoController();

/**
 * Todo Entity routes
 */
router.get('/count', function (req, res) {
    todoController.countAll(res);
});

router.get('/exists/:subject', function (req, res) {
    todoController.exists(req, res);
});

router.get('/:subject', function (req, res) {
    todoController.findById(req, res);
});

router.get('/', function (req, res) {
    todoController.findAll(res);
});

router.put('/:subject', function (req, res) {
    todoController.update(req, res);
});

router.post('/create', function (req, res) {
    todoController.create(req, res);
});

router.delete('/:subject', function (req, res) {
    todoController.deleteById(req, res);
});

module.exports = router;