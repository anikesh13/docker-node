const router = require("express").Router();

// Crud user data
const user = require("../../../controllers/userCltr");
router.route('/').post(user.addUser);
router.route('/').get(user.displayUser);

module.exports = router;