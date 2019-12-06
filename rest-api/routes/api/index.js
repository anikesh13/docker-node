const router = require("express").Router();

// user details api
const user = require("./userInfo");
router.use("/user-detail", user);

// book details api
const bookDetails = require("./bookInfo");
router.use("/book-data", bookDetails);

module.exports = router;