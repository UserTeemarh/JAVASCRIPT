'use strict';

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 4.33,
      x: 3.25,
      team2: 3.5,
    },
  };
  

//   NO 1

const [players1, players2] = game.players;
console.log(players1, players2);

// NO 2
const [gk, ...fieldplayers] = players1;
console.log(gk, fieldplayers);
// no 3
const allplayers = [...players1, ...players2]
console.log(allplayers);
// no 4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// no 5

const {team1, x: draw, team2} = game.odds;

console.log(team1, draw, team2);

// no 6 
function printGoals(...players) {
    console.log(players);
    console.log(`${players} are the players that scored ${players.length} goals`);
}

printGoals('Davies', 'Muller', 'Lewandowski',  'Kimmich');

// no 7

team1 < team2 && console.log(`${game.team1}/Team 1 is likely to win the game`);

team1 > team2 && console.log(`${game.team2}/Team 2 is likely to win the game`);