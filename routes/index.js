const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const dashboardController = require('../controllers/dashboardController');
const registerController = require('../controllers/registerController');
const alltaskController = require('../controllers/alltaskController');
const completedtaskController = require('../controllers/completedtaskController');

// path: routes\index.js
console.log('Router loaded');

router.get('/', homeController.home);
router.get('/dashboard', dashboardController.dashboard)
router.get('/register', registerController.register);
router.get('/alltask', alltaskController.alltask);
router.get('/completedtask', completedtaskController.completedtask);

module.exports = router;