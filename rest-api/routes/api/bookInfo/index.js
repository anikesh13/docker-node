const router = require("express").Router();

// Crud book data
const book = require("../../../controllers/bookCltr");
router.route('/').get(book.displayBook);
router.route('/').post(book.addBook);
router.route('/').patch(book.editBook);
router.route('/:id').delete(book.deleteBook);

module.exports = router;