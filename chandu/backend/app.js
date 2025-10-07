const express = require("express");
const app = express();
const version = "v1";
app.use(express.json());
const games = [];


app.get(`/${version}/api/get-games`, (req, res) => {
    res.json(games)
})

app.post(`/${version}/api/add-games`, (req, res) => {
    const game = req.body;
    game.id = games.length + 1;
    games.push(game)
    res.status(200).json({
        message: "games added successfully",
        game: game
    })

})




app.listen(3000, () => { console.log(" http://localhost:3000") });
