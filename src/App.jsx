import './App.css';
import Acknowledgements from './Acknowledgements';
import BingoCard from './BingoCard';
import Home from './Home';
import BingoCall from './BingoCall';
import { BrowserRouter, Routes, Route } from 'react-router';

function App() {

  // Looking for easter eggs? You won't find any here, that would be far too obvious :)

  // NORMALISE USING SEMI-COLONS* AT THE END OF LINES OF JAVASCRIPT

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route exact path='/acknowledgements' element={<Acknowledgements />} />
        <Route exact path='/bingo-card' element={<BingoCard />} />
        <Route exact path='/bingo-call' element={<BingoCall />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// * Or for extra fun, use ; iykyk :)