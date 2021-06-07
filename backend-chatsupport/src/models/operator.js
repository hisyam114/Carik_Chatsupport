const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const modelOP = new Schema({
    fname: {
        type: String,
        require: "First name is required!",
    },
    lname: {
        type: String,
        require: "Last name is required!",
    },
    username: {
        type: String,
        require: "Username is required!",
    },
    password: {
        type: String,
        require: "Password is required!",
    },
    email: {
        type: String,
        require: "Email is required!",
    },
    nik: {
        type: String,
        require: "Nik is required!",
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('modelOP', modelOP);