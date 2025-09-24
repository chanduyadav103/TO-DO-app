const express = require('express');
const app = express();

let bikes = [
    {
        id: 1,
        name: 'Royal Enfield Classic 350'
    },
    {
        id: 2,
        name: 'Yamaha R15'
    },
    {
        id: 3,
        name: 'KTM Duke 200'
    },
    {
        id: 4,
        name: 'Bajaj Pulsar 150'
    },
    {
        id: 5,
        name: 'Hero Splendor Plus'
    },
    {
        id: 6,
        name: 'TVS Apache RTR 160'
    },
    {
        id: 7,
        name: 'Honda Shine'
    },
    {
        id: 8,
        name: 'Suzuki Gixxer SF'
    },
    {
        id: 9,
        name: 'Jawa 42'
    },
    {
        id: 10,
        name: 'Harley Davidson Street 750'
    }
];

app.get('/api/bikes', (req, res) => {
    res.json(bikes);
});

app.get('/api/bikes/:id', (req, res) => {
    const bikeId = parseInt(req.params.id);
    const bike = bikes.filter(b => b.id = bikeId);
    res.json(bike);
});

app.get('/api/bikes/name/:name', (req, res) => {
    const bikeName = req.params.name.toUpperCase();
    const bike = bikes.filter(b => b.title.toUpperCase().includes(bikeName))
    res.json(bike);
});

app.listen(4000, () => console.log(' http://localhost:4000'));
