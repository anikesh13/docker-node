const bookSchema = require("../../models/bookSchema");

module.exports = {
    displayBook: function (req, res) {
        bookSchema.find()
            .then(result => {
                res.status(200).json({
                    message: 'Book List',
                    success: true,
                    status: 200,
                    data: result
                });
            })
            .catch(err => {
                res.status(404).json({
                    message: 'Book error',
                    success: false,
                    status: 404,
                    data: err
                });
            })
    },

    addBook: function (req, res) {
        const bookData = new bookSchema({
            ...req.body
        });

        bookData.save()
            .then(result => {
                res.status(200).json({
                    message: 'Book Added Successfully',
                    success: true,
                    status: 200
                });
            })
            .catch(err => {
                res.status(404).json({
                    message: 'Book error',
                    success: false,
                    status: 404,
                    data: err
                });
            });
    },

    deleteBook: function (req, res) {
        bookSchema.deleteOne({ _id: req.params.id })
            .then(result => {
                res.status(200).json({
                    message: 'Book Delete success',
                    success: true,
                    status: 200,
                });
            })
            .catch(err => {
                res.status(404).json({
                    message: 'Book error',
                    success: false,
                    status: 404,
                    data: err
                });
            });
    },

    editBook: function (req, res) {
        bookSchema.updateOne({ _id: req.body._id },
            {
                ...req.body
            })
            .then(result => {
                res.status(200).json({
                    message: 'Book Edited Successfully',
                    success: true,
                    status: 200,
                });
            })
            .catch(err => {
                res.status(404).json({
                    message: 'Book error',
                    success: false,
                    status: 404,
                    data: err
                });
            });
    }
}
