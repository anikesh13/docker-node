const router = require("express").Router();

// Crud book data
const book = require("../../../controllers/bookCltr");
router.route('/').post(book.addBook);
router.route('/').get(book.displayBook);

module.exports = router;