const {v4: uuidv4} = require('uuid');   // destructuring v4 from uuid as uuidv4 by assigning
let users = require('../data/userDB');

const createUser = (req, res)=> {
    const newUser = req.body;
    const userwithID = {...newUser, id: uuidv4()};
    users.push(userwithID);
    res.status(200).json({success: "true", msg: `Added user ${newUser.firstName} to DB`, data: user});
};

const deleteUser = (req, res)=> {
    const { id } = req.params;
    users = users.filter((person) => person.id !== id);
    res.status(200).json({data: users});
};

const updateUser = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, Age } = req.body;
    const user = users.find((person) => person.id === id);

    if(firstName){
        user.firstName = firstName;
    }
    if(lastName){
        user.lastName = lastName;
    }
    if(Age){
        user.Age = Age;
    }
    res.status(404).json({data: user});
};

const getUser = (req, res)=> {
    const {id} = req.params;
    const getUser = users.find((person)=> person.id === id);
    if(!getUser){
        return res.status(404).send(`user with ${id} not found`);
    }
    return res.status(200).json({data: getUser});
};

module.exports = {
    createUser,
    getUser,
    updateUser,
    deleteUser
}