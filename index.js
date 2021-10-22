const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
const port = 5000;

app.get('/', (req, res) => {
    res.send('hellow from my third  3')
});

const users = [
    { id: 0, name: 'Shabana', email: 'Shabana@gmail.com', phone: '01743234' },
    { id: 1, name: 'Sabnur', email: 'Sabnur@gmail.com', phone: '01743234' },
    { id: 2, name: 'Shabonti', email: 'Shabonti@gmail.com', phone: '01743234' },
    { id: 3, name: 'Shuchorita', email: 'Shuchorita@gmail.com', phone: '01743234' },
    { id: 4, name: 'Susmita', email: 'Susmita@gmail.com', phone: '01743234' },
    { id: 5, name: 'Seengeeta', email: 'Seengeeta@gmail.com', phone: '01743234' },
]

app.get('/users', (req, res) => {
    const search = req.query.search;
    // use query parameter
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes
            (search));
        res.send(searchResult);
    }
    else {
        res.send(users)
    }

});
// app.Methods
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body)
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})

// daynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user);
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'orange', 'banana', 'apple'])
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('Yummy Yummy tok fazli');
})

app.listen(port, () => {
    console.log('Listening to port', port);
})