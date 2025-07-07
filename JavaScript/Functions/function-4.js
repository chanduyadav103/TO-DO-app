function checkStatusofHeros(hero, aliveFunc, deadFunc) {
    return hero.status ? aliveFunc(hero.name) : deadFunc(hero.name)
}

const marvelHeros = [
    {
        name: 'Tony Stark',
        status: false,
    },
    {
        name: "Thor",
        status: true
    }
];

for (let hero of marvelHeros) {
    console.log(checkStatusofHeros(
        hero,
        (name) => {
            return name + ' is alive';
        },
        (name) => {
            return name + ' is dead';
        })
    )
}
