import '../Atomz.css';
import Game from './Game';

function App() {
  return (
    <div className="Atomz">
      <div className="atomz_title">
          <div className='title__1'>At</div>
          <div className = "title__2">:o:</div> <div className='title__3'>mz</div>
          <div className="title__4">||</div>
          <div className="title__5">:o:</div>
      </div>
      <Game></Game>
    </div>
  );
}

export default App;
