import './App.css';
import { useNavigate, Link } from 'react-router';

function Home() {

  const navigate = useNavigate();

  return (
    <div style={{ minHeight: '100vh', minWidth: '100vw' }}>
      <div style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center', margin: '0 auto' }} onClick={() => navigate('/')}>
        <img src='https://media.wired.com/photos/5cdefc28b2569892c06b2ae4/3:2/w_2560%2Cc_limit/Culture-Grumpy-Cat-487386121-2.jpg' className="logo center" alt="Grumpy Cat" style={{ borderRadius: '150px' }} />
        <h1 style={{ paddingTop: '2%' }} className='center'>Cat Bingo</h1>
      </div>
      <div className="card" style={{ display: 'flex', flexDirection: 'column'}}>
        <button style={{ margin: '4%' }} onClick={() => navigate("/bingo-card")}>
          Get a Bingo Card!
        </button>
        <button style={{ margin: '4%' }} onClick={() => navigate("/bingo-call")}>
          Be the Bingo Caller!
        </button>
      </div>
      <Link to='/acknowledgements'>
        <p className="center ">
          About | Acknowledgements
        </p>
      </Link>
      <p className="read-the-docs center">
        &copy; 2026 Tug O'Flaherty
      </p>
    </div>
  );
}

export default Home;