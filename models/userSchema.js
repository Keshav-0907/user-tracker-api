const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true,
    },
    lname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: Number,
        required: true,
    },
    gender: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
    },
    // profile: {
    //     type: String,
    //     required: true,
    // },
    location: {
        type: String,
        required: true,
    },
    dateCreated: Date,
    dateUpdated: Date

})


const User = mongoose.model('user', userSchema)

module.exports = User