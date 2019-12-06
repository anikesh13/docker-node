const router = require("express").Router();

// Crud book data
const book = require("../../../controllers/bookCltr");
router.route('/').get(book.allBooks);
router.route('/:id').get(book.oneBook);
router.route('/').post(book.addBook);
router.route('/').patch(book.editBook);
router.route('/:id').delete(book.deleteBook);

module.exports = router;