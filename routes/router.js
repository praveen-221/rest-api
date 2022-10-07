const express = require('express');
let users = require('../data/userDB');
const router = express.Router();
const {
    createUser,
    getUser,
    updateUser,
    deleteUser
} = require('../controllers/controllers')

// GET route
router.get('/', (req, res)=> {
    res.send(users);
});

router.get('/:id', getUser);

// POST route
router.post('/', createUser);

// DELETE route
router.delete('/:id', deleteUser);

// Update[PATCH/PUT] route
// PATCH is used when the data is partially updated/modified
// PUT is used when the data is completely updated (all its components overwrited)
router.patch('/:id', updateUser);

module.exports = router;