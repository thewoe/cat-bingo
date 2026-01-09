import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import './App.css';

function BingoCall() {

  const navigate = useNavigate();

  const [callData, setCallData] = useState();
  const [count, setCount] = useState(0);
  const [displayData, setDisplayData] = useState([]);

  async function fetchData() {
  // const URL = 'http://localhost:3000/call';
  const URL = 'https://cat-bingo-api.onrender.com/call';
  try {
    const response = await fetch(URL);
    if (!response.ok) throw new Error(`Response status: ${response.status}`);
    const result = await response.json();
    setCallData(result);
  } catch (error) {
    console.error(error.message);
  }
}

useEffect(() => { fetchData(); }, []);

useEffect(() => { if (count > 0) setDisplayData(callData.slice(0, count)); }, [count, callData]);


/*
                            ╱|、
                          (˚ˎ 。7  
                           |、˜〵          
                          じしˍ,)ノ

*/
  return (
    <div style={{ minHeight: '100%', minWidth: '100%' }}>
      <div style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center', margin: '0 auto' }} onClick={() => navigate('/')}>
        <img src='https://media.wired.com/photos/5cdefc28b2569892c06b2ae4/3:2/w_2560%2Cc_limit/Culture-Grumpy-Cat-487386121-2.jpg' className='logo center' alt='Grumpy Cat' style={{ borderRadius: '150px' }} />
        <h1 style={{ paddingTop: '2%' }} className='center'>Cat Bingo</h1>
      </div>
      <h2 className='center'>Bingo Call</h2>
      <div className='card' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
          <button style={{ margin: '2%' }} onClick={() => setCount((count) => count + 1)}>
              Next Cat!
          </button>
      </div>
      <table style={{ margin: '0 auto' }}>
        <tbody>
          {
            displayData && displayData.slice().reverse().map(e => (
              <tr>
                <td key={e.id} style={{ padding: '25px', borderBottom: '1px solid black' }}>
                  <img src={e.image} style={{ width: '250px', height: '250px', objectFit: 'cover' }} />
                  <h3 className='center'>{e.name}</h3>
                  {/* <p>Image Credit: {e.credit}</p> */}
                </td>
              </tr>
            ))
          }
          </tbody>
      </table>
      <p className='read-the-docs center'>&copy; 2026 Tug O'Flaherty</p>
    </div>
  );
}

export default BingoCall;