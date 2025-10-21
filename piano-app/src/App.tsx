import SnakeGame from './essentials/SnakeGame'
import './App.css'

function App() {


  return (
    <div style={{ padding: 24 }}>
      <h1>Grow your snake!!!</h1>
      <SnakeGame cols={25} rows={15} cellSize={20} speed={120} initialLength={3} />
      <h3>Welcome to my website. Hope you guys found it as amusing as I did when I was building this.</h3>
      <h4>Stuff that makes me human: Dedication, Perfectionism, Failure, Loss, Rebound, Friends, Loyalty</h4>
      <p>Stuff used to make this website: </p>
      <br></br>
      <p>Vite, React, Docker, Express, Node, $10 openAI API credits, REST APIs, Mongo DB Atlas Data API, and a dose of fun</p>
    </div>
  );
}

export default App
