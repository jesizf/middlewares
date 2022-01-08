const router = require('express').Router();
const{index, login, admin, contact, about, music} = require('../controllers/mainController');
const userlogs = require('../middlewares/userLogs');
const auth = require('../middlewares/authAdmin');
router.get('/', index)
router.get('/login', login)
router.get('/admin', auth, admin)
router.get('/contact', contact)
router.get('/about', about)
router.get('/music', music)
module.exports = router;


