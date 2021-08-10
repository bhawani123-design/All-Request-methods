const express = require('express');
const users = require('./users.json')

const app = express();
app.use(express.json()) // stringify - parse

// let port = 4400;

app.get('/', function (req, res) {
    
    return res.send('Welcome to Home page')
    // return res.send({data:users})
})

app.get('/users', function (req, res) {

    return res.send({data: users});
})

app.post('/users', (req, res) => {
    // users.push(body);
    let dt = [...users, req.body];
    return res.send( dt );
})

app.patch('/users/:id', (req, res) => {
    let id = +req.params.id;
    let newData = users.map((el) => {
        if (id == el.id) {
            let x = { ...el, ...req.body };
            return x;
        } else {
            return el;
        }
    })
     res.send(newData)
})

app.delete('/users/:id', (req, res) => {
    let id = +req.params.id;
    let newData = users.filter((el) => {
        if (id != el.id) {
            return el;
        }
    })
    res.send(newData)
})


app.listen(4000, () => {
    console.log(`listning to port 4000`)
})















// ===========

// app.get('/users', function (req, res) {
//     return res.send('Welcome to Home page')
// })

// app.post('/users', function (req, res) {
//     return res.send('Testing Post');
    // return res.send({ id: req.params.id }); // To get the id
// })

// app.patch('/users', (req, res) => {
//     return res.send('Testing patch')
// })

// app.delete('/users', (req, res) => {
//     return res.send('Testing delete')
// })