import './App.css';

function BingoCard() {

  // This is your bingo card, use it wisely...

  return (
    <>
      <div style={{ display: 'flex' }}>
          <img src='https://media.wired.com/photos/5cdefc28b2569892c06b2ae4/3:2/w_2560%2Cc_limit/Culture-Grumpy-Cat-487386121-2.jpg' className="logo" alt="Grumpy Cat" style={{ borderRadius: '150px' }} />
          <h1 style={{ paddingTop: '2%' }}>Cat Bingo</h1>
      </div>
      <h2 className='center'>Bingo Card</h2>
      <div className="card" style={{ display: 'flex', flexDirection: 'row'}}>
          <button style={{ margin: '2%' }} onClick={() => setCount((count) => count + 1)}>
              Get a New Bingo Card!
          </button>
          <button style={{ margin: '2%' }} onClick={() => setCount((count) => count + 1)}>
              Clear all Collected Cat Counters!
          </button>
      </div>
      <h3 className='center'>Click on a cat to mark it as 'collected' when it is called (click again to clear)</h3>
      <table>
        <tr style={{ border: '1px solid black' }}>
          <td style={{ border: '1px solid black' }}>Cat</td>
          <td style={{ border: '1px solid black' }}>Cat</td>
          <td style={{ border: '1px solid black' }}>Cat</td>
          <td style={{ border: '1px solid black' }}>Cat</td>
        </tr>
      </table>
      <p className="read-the-docs">&copy; 2026 Tug O'Flaherty</p>
    </>
  );
}

export default BingoCard;