const router = require("express").Router();

// user details api
const user = require("./userInfo");
router.use("/user-detail", user);

module.exports = router;