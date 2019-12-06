const bookSchema = require("../../models/bookSchema");

module.exports = {
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
                res.status(400).send(err);
            });
    },

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
                res.send(err);
            })
    }
}
