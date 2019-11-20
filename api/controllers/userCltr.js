const userSchema = require("../models/userSchema").userObejct;
const userAddSubscribe = require("../models/userSchema").userSubscribe;

function userSubscribed(userID, res) {
    const isVisit = new userAddSubscribe({
        uuid: userID,
        isVisited: false
    });

    isVisit.save()
        .then(data => {
            res.send("save to database");
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
}

module.exports = {
    addUser: function (req, res) {
        const userData = new userSchema({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            phone: req.body.phone
        });

        userData.save()
            .then(user => {
                userSubscribed(user._id, res);
            })
            .catch(err => {
                res.status(400).send(err);
            });
    },

    displayUser: function (req, res) {
        userSchema.find()
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.send(err);
            })
    }
}
