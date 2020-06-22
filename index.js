const express = require('express');
const app = express();

app.use(express.json());

// app.all('/user', (req, res, next) => {
//     console.log('Aqui paso');
//     next();
// })

app.get('/user', (req, res) => {
    res.json({
        username: 'Moises',
        lastname: 'Bravo'
    })
})

app.post('/user/:id', (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.send('POST');
})

app.put('/user/:id', (req, res) => {
    console.log(req.body);
    res.send(`User ${req.params.id} update`);
})

app.delete('/user/:userId', (req, res) => {
    res.send(`User ${req.params.userId} deleted`);
})

app.use(express.static('public'));

app.listen(3000, () => {
    console.log('server on port 3000') 
}) 