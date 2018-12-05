const jokes = require('./lib/jokes');
const math = require('./lib/math');

const app = {};

app.config = {
    'timeBetweenJokes': 1000,
}

app.printAJoke = () => {
    const allJokes = jokes.allJokes();
    const randomJokeNumber = math.getRandomNumber(0, allJokes.length - 1);

    console.log(allJokes[randomJokeNumber]);
}

app.indefiniteLoop = () => {
    setInterval(
        app.printAJoke,
        app.config.timeBetweenJokes
    );
}

app.indefiniteLoop();