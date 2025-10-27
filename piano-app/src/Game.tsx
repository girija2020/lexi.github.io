import SnakeGame from './essentials/SnakeGame'
import './App.css'

function Game() {


  return (
     <div style={{ width: '100%', height: 600, position: 'relative' }}>
      <h1>Grow your snake!!!</h1>
      <SnakeGame cols={25} rows={15} cellSize={20} speed={120} initialLength={3} />
      <p> Instructions - One can use both the arrows or ASWD keys to control the snake, the red square is where the food is and as it is already obvious, the green squares are your snake. Your goal is to eat as many red squares as possible. Do not hit the borders or yourself when you do that though!</p>
      <br></br>
      <br></br>
      <br></br>
      {/* <p>Vite, React, Docker, Express, Node, $10 openAI API credits, REST APIs, Mongo DB Atlas Data API, and a dose of fun</p> */}
    </div>
  );
}

export default Game
