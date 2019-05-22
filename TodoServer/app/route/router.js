/**
 * Express Router configuration
 */
const express = require('express');
const router = express.Router();



/* API routes */
router.use('/Todo', require('../route/TodoRoute'));
router.use('/Category', require('../route/CategoryRoute'));

module.exports = router;  