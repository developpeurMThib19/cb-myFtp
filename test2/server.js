/**Formulaire user et password */

const express = require('express');
const faker = require('faker');

const app = express();


const users = [];

for(let i = 0; i < 10; i++){
    users.push({
        firstname: faker.name.firstName(),
        lastname: faker.name.lastName(),
        password: faker.internet.password()
        
    });
   
}

const versionApi = '/api/v1';


app.get(`${versionApi}/users`, (req, res) => {
    res.json({
        data: users
    })
});

app.get(`${versionApi}/users/:id`, (req, res) => {

    const id = req.params.id - 1;

    res.json({
        data: users[id] || null
    })
});



app.listen(5000, () => console.log('connection port 5000'));