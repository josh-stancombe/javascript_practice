let team = {

    _players: [
    {
    firstName: 'Josh',
    lastName: 'Stancombe',
    age: 27
    }, {
    firstName: 'Niall',
    lastName: 'Burns',
    age: 28
    }, {
    firstName: 'Ben',
    lastName: 'Hopkins',
    age: 25
  } ],

  _games: [
  { 
    opponent: 'Man Utd',
    teamPoints: 3,
    opponentPoints: 2
  },{
    opponent: 'Spurs',
    teamPoints: 4,
    opponentPoints: 4
  },{
    opponent: 'Liverpool',
    teamPoints: 2,
    opponentPoints: 3
  }
  ],

  get players(){
    return `${this._players}`
  },

  get games(){
    return `${this._games}`
  },

  addPlayer(firstName, lastName, age){
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age };
      
    this._players.push(player);
  },

  addGame(oppName, teamPoints, oppPoints){
    let game = {
      opponent: oppName,
      teamPoints: teamPoints,
      opponentPoints: oppPoints};

      this._games.push(game);
  }
};

team.addPlayer("Steph", "Curry", 28);
team.addPlayer("Lisa", "Leslie", 44);
team.addPlayer("Bugs", "Bunny", 76);

team.addGame("Leeds", 3, 0);
team.addGame("Aston Villa", 2, 2);
team.addGame("Brighton", 2, 4);

console.log("Team Players: ");
for (let player in team._players) {
  console.log(`- ${team._players[player].firstName} ${team._players[player].lastName} (${team._players[player].age})`)
};

console.log('')

console.log("Games Played: ");
for (let game in team._games) {
  console.log(`Opponent: ${team._games[game].opponent}. Our Score: ${team._games[game].teamPoints} / Their Score: ${team._games[game].opponentPoints}`)
};
