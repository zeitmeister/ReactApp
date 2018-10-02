const players = [
    {
      name: "Guil",
      score: 50
    },
    {
      name: "Treasure",
      score: 85
    },
    {
      name: "Ashley",
      score: 95
    },
    {
      name: "James",
      score: 80
    }
]

const Header = (props) => {
  return (
    <header>
      <h1>{ props.title }</h1>
      <span className="stats">Players: {props.totalPlayers(5)}</span>
    </header>
  );
}

const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">
        {props.playerName}
      </span>

      <Counter score={props.playerScore}/>
    </div>
  );
}

const Counter = (props) => {
  return (
    <div className="counter">
      <button className="counter-action decrement"> - </button>
      <span className="counter-score">{props.score}</span>
      <button className="counter-action increment"> + </button>
    </div>
  );
}

const App = (props) => {
  return (
    <div className="scoreboard">
      <Header
       title="Scoreboard"
       totalPlayers={ props.initialPlayers.length } />

      {/*players list */}
      {props.initialPlayers.map( player => 
        <Player 
      playerName={player.playerName}
      playerScore={player.playerScore}/>
      )}
    </div>
  );
}

ReactDOM.render(
    <App initialPlayers={players}/>,
    document.getElementById('root')
);
