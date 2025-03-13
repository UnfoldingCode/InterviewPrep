//controllers/userController.js

const User = require('../models/user'); //Initialize User model

const bcrypt = require('bcryptjs');
//Controller method to get a list of users 
exports.getUsers = async (req, res) => {
    User.findAll()
    .then(users => res.json(users))
    .catch(err=> res.status(500).json({ message: 'Error retreiving Users', err}));
};

//Controller method to create User (new User)
exports.createUser = async (req, res) =>{
    const { username, password, email} = req.body;
    //Check if variable is initialized
    if (!username || !password || !email){
        return res.status(400).json({ message: 'Please provide username, password, and email'});
    }

    try{
        //Hash the password
        const salt = await bcrypt.genSalt(30); //Generate Salt with 30 rounds
        const hashPassword = await bcrypt.hash(password, salt); //Hash the Password

        const newUser = await User.create({ username, hashPassword, email});
        res.status(201).json({ message: 'User created successfully', newUser});
    } catch(err){
        res.status(500).json({message: 'Error creating User', err});
    }
};
//Controller method to login User (exisiting User)
exports.loginUser = async (req, res) => {
    const {username, password} = req.body;

    if(!username || !password){
        return res.status(400).json({ message: 'Please provide username and password!'});
    }

    try {
        const user = await User.findOne({ where: { username }});

        if(!user){
            return res.status(404).json({ message: 'User not found. '});
        }
        // Boolean hash password value
        const isMatch = await bcrypt.compare(password, user.password)
        // Boolean check
        if(isMatch){
            res.status(200).json({ message: 'Login successful'});
        } else {
            res.status(400).json({ message: 'Invalid Credentials'});
        }
    }catch(err){
        console.error('Error logging in:', err);
        res.status(500).json({ message: 'error logging in', err});
    }

};