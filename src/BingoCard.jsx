import { useState } from 'react';
import { useNavigate } from 'react-router';

import './App.css';

function BingoCard() {

  const navigate = useNavigate();

  const [cardData, setCardData] = useState();
  // This is your bingo card, use it wisely...

  async function fetchData() {
  const URL = "http://localhost:3000/card";
  try {
    const response = await fetch(URL);
    if (!response.ok) throw new Error(`Response status: ${response.status}`);
    const result = await response.json();
    setCardData(result);
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
}

  return (
    <div style={{ minHeight: '100vh', minWidth: '100vw' }}>
      <div style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center', margin: '0 auto' }} onClick={() => navigate('/')}>
        <img src='https://media.wired.com/photos/5cdefc28b2569892c06b2ae4/3:2/w_2560%2Cc_limit/Culture-Grumpy-Cat-487386121-2.jpg' className="logo center" alt="Grumpy Cat" style={{ borderRadius: '150px' }} />
        <h1 style={{ paddingTop: '2%' }} className='center'>Cat Bingo</h1>
      </div>
      <h2 className='center'>Bingo Card</h2>
      <div className="card" style={{ display: 'flex', flexDirection: 'row'}}>
          <button style={{ margin: '2%' }} onClick={() => fetchData()}>
              Get a New Bingo Card!
          </button>
          <button style={{ margin: '2%' }} onClick={() => setCount((count) => count + 1)}>
              Clear all Collected Cats!
          </button>
      </div>
      <h3 className='center'>Click on a cat to mark it as 'collected' when it is called (click again to clear)</h3>
      <table>
        {
          cardData && cardData.map(e => (
            <tr key={e.id}>
              <td id={e.id} style={{ border: '1px solid black' }}>
                <img src={e.image} style={{ width: '150px', height: '100px' }} />
                <h3>{e.name}</h3>
                {/* <p>Image Credit: {e.credit}</p> */}
              </td>
            </tr>
          ))
        }
      </table>
      <p className="read-the-docs">&copy; 2026 Tug O'Flaherty</p>
    </div>
  );
}

export default BingoCard;