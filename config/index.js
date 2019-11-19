require('dotenv').config();

const mongoose = require('mongoose');

module.exports = mongoose.connect(process.env.DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}).then(() => {
    console.log("Connected to Database");
}).catch(err => {
    console.log(err);
    process.exit();
});
