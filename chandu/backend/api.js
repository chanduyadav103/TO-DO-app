const express = require('express');
const app = express();

let movies = [
    {
        id: 1,
        title: 'bunny'
    },
    {
        id: 2,
        title: 'orange'
    },
    {
        id: 3,
        title: 'DJ'
    },
    {
        id: 4,
        title: 'coolie'
    },
    {
        id: 5,
        title: 'Deva'
    },
    {
        id: 6,
        title: ' jai Lava Kusa'
    },
    {
        id: 7,
        title: 'arjun reddy'
    },
    {
        id: 8,
        title: 'brothers'
    },
    {
        id: 9,
        title: 'hello'
    },
    {
        id: 10,
        title: 'puspha'
    }
];

app.get('/api/movies', (req, res) => {
    res.json(bikes);
});

app.get('/api/moviess/:id', (req, res) => {
    const movieId = req.params.id;
    const movie = movies.filter(m => m.id === movieId);
    if (movie) {
        res.json(movie);
    } else {
        console.log("not found")
    }

});
app.get('/api/movies/:name', (req, res) => {
    const movieName = req.params.tittle.toUpperCase();
    const movie = bikes.filter(m => m.title.toUpperCase().includes(movieName));

    res.json(movies);
});


app.listen(3000, () => console.log(' http://localhost:3000'));
