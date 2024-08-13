const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let items = [];

// Add a new item
app.post('/items', (req, res) => {
    const item = req.body;
    items.push(item);
    res.status(201).send(item);
});

// Retrieve all items
app.get('/items', (req, res) => {
    res.send(items);
});

// Retrieve a specific item by its ID
app.get('/items/:id', (req, res) => {
    const item = items.find(i => i.id === req.params.id);
    if (item) {
        res.send(item);
    } else {
        res.status(404).send({ message: 'Item not found' });
    }
});

// Update an existing item by its ID
app.put('/items/:id', (req, res) => {
    const index = items.findIndex(i => i.id === req.params.id);
    if (index !== -1) {
        items[index] = req.body;
        res.send(items[index]);
    } else {
        res.status(404).send({ message: 'Item not found' });
    }
});

// Delete an item by its ID
app.delete('/items/:id', (req, res) => {
    const index = items.findIndex(i => i.id === req.params.id);
    if (index !== -1) {
        items.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).send({ message: 'Item not found' });
    }
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
