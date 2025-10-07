const express = require('express');
const app = express();

let games = [
    {
        id: 1,
        name: 'Grand Theft Auto V'
    },
    {
        id: 2,
        name: 'puzzle'
    },
    {
        id: 3,
        name: 'Minecraft'
    },
    {
        id: 4,
        name: 'The Legend of Zelda'
    },
    {
        id: 5,
        name: 'God of War'
    },
    {
        id: 6,
        name: 'Call of Duty'
    },
    {
        id: 7,
        name: 'Fortnite'
    },
    {
        id: 8,
        name: 'PUBG'
    },
    {
        id: 9,
        name: 'The Witcher 3'
    },
    {
        id: 10,
        name: 'Assassins Creed Valhalla'
    }
];

app.get('/api/games', (req, res) => {
    res.json(games);
});

app.get('/api/games/:id', (req, res) => {
    const gameId = parseInt(req.params.id);
    const game = games.filter(g => g.id === gameId);
    if (game) {

        res.json(game);
    } else {
        console.log("not found")
    }
});

app.get('/api/games/name/:name', (req, res) => {
    const gameName = req.params.name.toUpperCase();
    const game = games.filter(g => g.name.toUpperCase().includes(gameName));
    res.json(game);
});


app.listen(5000, () => console.log('http://localhost:5000'));
