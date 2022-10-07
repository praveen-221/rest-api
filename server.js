const { urlencoded } = require('body-parser');
const express = require('express');
const userRoutes = require('./routes/router');

const app = express();
const PORT = 5000;

app.use(urlencoded({extended: false}));
app.use(express.json());

// routes
app.use('/users', userRoutes);
app.get('/', (req, res)=> {
    res.send(`<h2>WELCOME :):</h2>`);
})

app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`);
})