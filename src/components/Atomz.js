import '../Atomz.css';
import Game from './Game';

function App() {
  return (
    <div className="Atomz">
      <div className="title">
          <div className='title__1'>At</div>
          <div className = "title__2">:o:</div> <div className='title__3'>mz</div>
          <div className="title__4">||</div>
          <div className="title__5">:o:</div>
      </div>
      <button onClick = {() => {window.open('https://github.com/dgorin6/atomz/blob/master/README.md')}} className = 'instructions'>How to Play</button>
      <Game></Game>
    </div>
  );
}

export default App;
