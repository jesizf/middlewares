const router = require('express').Router();
const{index, login, admin} = require('../controllers/mainController');
const userlogs = require('../middlewares/userLogs');
const auth = require('../middlewares/authAdmin');
router.get('/', index)
router.get('/login', login)
router.get('/admin', auth, admin)

module.exports = router;


