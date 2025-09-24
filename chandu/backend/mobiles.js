const express = require('express');
const app = express();

let mobiles = [
    {
        id: 1,
        name: 'iPhone 14'
    },
    {
        id: 2,
        name: 'Samsung Galaxy'
    },
    {
        id: 3,
        name: 'OnePlus'
    },
    {
        id: 4,
        name: 'Google Pixel'
    },
    {
        id: 5,
        name: 'Xiaomi '
    },
    {
        id: 6,
        name: 'Realme '
    },
    {
        id: 7,

        name: 'Oppo '
    },
    {
        id: 8,
        name: 'Vivo '
    },
    {
        id: 9,
        name: 'Nothing'
    },
    {
        id: 10,
        name: 'Asus'
    }
];

app.get('/api/mobiles', (req, res) => {
    res.json(mobiles);
});

app.get('/api/mobiles/:id', (req, res) => {
    const mobileId = parseInt(req.params.id);
    const mobile = mobiles.filter(m => m.id = mobileId);
    res.json(mobile);
});

app.get('/api/mobiles/name/:name', (req, res) => {
    const mobileName = req.params.name.toUpperCase();
    const mobile = mobiles.filter(m => m.name.toUpperCase().includes(mobileName));
    res.json(mobile);
});

app.listen(5000, () => console.log('http://localhost:5000'));
