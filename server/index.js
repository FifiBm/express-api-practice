// Create an express server that will serve up your static html file
// Create a get request in your get route to the pokeapi requesting some data
// Return that data to the front end and display it

const express = require('express'); // require express dependency
const app = express(); // invoke express function and assign to a variable
const PORT = 3000; // The port the server will listen on
const path = require('path');
const axios = require('axios');

app.use('/', express.static(path.join(__dirname, '..', 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/form', (req, res) => {
    const { userInput } = req.body;
    axios.get(`https://pokeapi.co/api/v2/pokemon/${userInput}/`)
    .then(response => {
        res.status(200).send(response.data);
    })
    .catch(error => {
        res.send({
            serverResponse: 'Please enter a valid Pokemon name or ID!'
        })
    });

});

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}!`);
});
