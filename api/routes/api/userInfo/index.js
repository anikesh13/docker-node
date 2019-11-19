const router = require("express").Router();
const user = require("../../../controllers/userCltr");

router.route('/').post(user.addUser);

module.exports = router;