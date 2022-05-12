const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/userController');

// Routes
router.route('/').get(userCtrl.view).post(userCtrl.find);
router.route('/adduser').get(userCtrl.form).post(userCtrl.create);
router.route('/edituser/:id').get(userCtrl.edit).post(userCtrl.update);
router.get('/viewuser/:id', userCtrl.viewall);
router.get('/:id', userCtrl.delete);

module.exports = router;
