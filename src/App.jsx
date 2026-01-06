import './App.css';
import Acknowledgements from './Acknowledgements';
import BingoCard from './BingoCard';

function App() {

  // Looking for easter eggs? You won't find any here, that would be far too obvious :)

  // NORMALISE USING SEMI-COLONS* AT THE END OF LINES OF JAVASCRIPT

  /*return (
    <>
    <div style={{ display: 'flex' }}>
      <img src='https://media.wired.com/photos/5cdefc28b2569892c06b2ae4/3:2/w_2560%2Cc_limit/Culture-Grumpy-Cat-487386121-2.jpg' className="logo" alt="Grumpy Cat" style={{ borderRadius: '150px' }} />
      <h1 style={{ paddingTop: '2%' }}>Cat Bingo</h1>
    </div>
      <div className="card" style={{ display: 'flex', flexDirection: 'column'}}>
        <button style={{ margin: '4%' }} onClick={() => setCount((count) => count + 1)}>
          Get a Bingo Card!
        </button>
        <button style={{ margin: '4%' }} onClick={() => setCount((count) => count + 1)}>
          Be the Bingo Caller!
        </button>
      </div>
      <a href='' target='_blank'>
        <p className="">
          About/Acknowledgements
        </p>
      </a>
      <p className="read-the-docs">
        &copy; 2026 Tug O'Flaherty
      </p>
    </>
  );*/
  // return <Acknowledgements />;
  return <BingoCard />;
}

export default App;

// * Or for extra fun, use ; iykyk :)