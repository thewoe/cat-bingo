import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import './App.css';

function BingoCard() {

  const navigate = useNavigate();

  const [cardData, setCardData] = useState();
  const [score, setScore] = useState(0);
  // This is your bingo card, use it wisely...

  async function fetchData() {
    // const URL = 'http://localhost:3000/card';
    const URL = 'https://cat-bingo-api.onrender.com/card';
    try {
      const response = await fetch(URL);
      if (!response.ok) throw new Error(`Response status: ${response.status}`);
      const result = await response.json();
      const conformedResult = result.map(e => ({ ...e, marked: false }));
      setCardData(conformedResult);
    } catch (error) {
      console.error(error.message);
    }
  }

  const toggleMark = id => {
    setCardData(prev =>
      prev.map(e =>
        e.id === id
          ? { ...e, marked: !e.marked }
          : e
      )
    );
  };

  const markedCount = () => cardData ? setScore(cardData.filter(e => e.marked).length) : setScore(0);

  const clearMarks = () => { setCardData(prev => prev.map(e => ({ ...e, marked: false }))); };

  useEffect(() => markedCount(), [toggleMark, clearMarks]);

  console.log()
  
  return (
    <div style={{ minHeight: '100%', minWidth: '100%' }}>
      <div style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center', margin: '0 auto' }} onClick={() => navigate('/')}>
        <img src='https://media.wired.com/photos/5cdefc28b2569892c06b2ae4/3:2/w_2560%2Cc_limit/Culture-Grumpy-Cat-487386121-2.jpg' className='logo center' alt='Grumpy Cat' style={{ borderRadius: '150px' }} />
        <h1 style={{ paddingTop: '2%' }} className='center'>Cat Bingo</h1>
      </div>
      <h2 className='center'>Bingo Card</h2>
      <div className='card' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <button style={{ margin: '2%' }} onClick={() => fetchData()}>
              Get a New Bingo Card!
          </button>
          <button style={{ margin: '2%' }} onClick={() => clearMarks()}>
             Reset Card!
          </button>
      </div>
      {
        /*
            ₍^. .^₎⟆
        */
        cardData && (
          <>
            <p className='center'>Click on a cat to mark it as 'collected' when it is called (click again to clear)</p>
            <h4 className='center'>Score: {score}/16</h4>
            { 
              score === 16 && 
              <>
                <h1 style={{ color: 'green' }}>MEOW!</h1>
                <h2 className='center'>🐈 Only doing your best cat impression will count as a win 🐈‍⬛</h2>
                <img src='https://gist.githubusercontent.com/brudnak/aba00c9a1c92d226f68e8ad8ba1e0a40/raw/e1e4a92f6072d15014f19aa8903d24a1ac0c41a4/nyan-cat.gif' alt='Nyan Cat' style={{ width: '75%' }} />
              </>
            }
            <div className='bingo-grid'>
              { cardData &&
                cardData.map(e => (
                  <div key={e.id} className={`bingo-cell ${e.marked ? 'marked' : ''}`} onClick={() => toggleMark(e.id)}>
                    <img src={e.image} alt={e.name} />
                    <div className='bingo-label'>{e.name}</div>
                  </div>
                ))
              }
            </div>
          </>
        )
      }
      <p className='read-the-docs center'>&copy; 2026 Tug O'Flaherty</p>
    </div>
  );
}

export default BingoCard;