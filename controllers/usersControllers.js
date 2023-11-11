const User = require('../models/userSchema')
const userschema = require('../models/userSchema')
const moment = require('moment')

//Register uSER
exports.userpost = async (req, res) => {
    // const file = req.file.filename
    // console.log(file)
    const { fname, lname, email, phone, status, location, gender } = req.body

    console.log(req.body)

    if (!fname || !lname || !email || !phone || !status || !location || !gender) {
        return res.status(401).json('All fields are required')
    }

    try {
        const preUser = await User.findOne({ email: email })

        if (preUser) {
            return res.status(401).json('User Already Exist')
        } else {

            const dateCreated = moment(new Date()).format("YYYY-MM-DD hh:mm:ss")
            const newUser = new User({
                fname, lname, email, phone, status, location, gender, dateCreated
            })
            await newUser.save()
            return res.status(200).json(newUser)

        }

    } catch (error) {
        console.log(error)
    }
}


//get all user
exports.userGet = async (req, res) => {
    const search = req.query.search || ""
    const gender = req.query.gender || ""
    const status = req.query.status || ""

    const query = {
        fname: { $regex: search, $options: "i" }
    }

    if (gender !== "All") {
        query.gender = gender
    }

    if (status !== "All") {
        query.status == status
    }
    try {
        const userData = await User.find(query)
        res.status(200).json(userData)
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.getSingleUser = async (req, res) => {
    const { id } = req.params;


    try {
        console.log(id)
        const userdata = await User.findOne({ _id: id });
        res.status(200).json(userdata)
    } catch (error) {
        res.status(401).json(error)
    }
}

exports.useredit = async (req, res) => {
    const { id } = req.params;
    const { fname, lname, email, phone, status, location, gender } = req.body;

    const dateUpdated = moment(new Date()).format("YYYY-MM-DD hh:mm:ss");

    try {
        const updatedUser = await User.findByIdAndUpdate(id, {
            fname, lname, email, phone, status, location, gender, dateUpdated
        }, { new: true });
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(401).json(error);
    }
};

exports.userDelete = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedUser = await User.findByIdAndDelete({ _id: id })
        res.status(201).json(deletedUser)
    } catch (error) {
        res.status(401).json(error);
    }

}