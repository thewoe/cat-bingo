import { useNavigate } from 'react-router';
import './App.css';


function Acknowledgements() {

  // Hmm... guessing your wondering what the point of this game is?

  // 🐱

  const navigate = useNavigate();

  return (
    <div style={{ minHeight: '100%', width: '100%' }}>
        <div style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center', margin: '0 auto' }} onClick={() => navigate('/')}>
            <img src='https://media.wired.com/photos/5cdefc28b2569892c06b2ae4/3:2/w_2560%2Cc_limit/Culture-Grumpy-Cat-487386121-2.jpg' className='logo center' alt='Grumpy Cat' style={{ borderRadius: '150px' }} />
            <h1 style={{ paddingTop: '2%' }} className='center'>Cat Bingo</h1>
        </div>
        <h2 className='center'>Acknowledgements</h2>
        <h3>Introduction</h3>
        <p><strong>What can I say...?</strong></p>
        <p>It's a HTML5/JS/CSS cat bingo web game (based on <a href='https://www.laurenceking.com/products/cat-bingo?srsltid=AfmBOooKzshGlu1dIoBTBm3QPPFpcoaE0PmZSHbLiEgWiqcth1exvamt' target='_blank'>the <em>popular</em> board game of the same name</a>) that lets players compete to match all the breeds of cat on their bingo card first! The complete list of cat breeds, images, and image credits are from <a href='https://en.wikipedia.org/wiki/List_of_cat_breeds' target='_blank'>Wikipedia</a> (<em>obviously</em> he most reliable source of information!), and the random bingo cards contain 16 cats in a square arrangement.</p>
        <h3>Features</h3>
        <p>All features coming soon</p>
        <h3>Coming Soon</h3>
        <ul>
            <li>The actual game you care so much about playing (hopefully!)</li>
            <li>Web sockets to facilitate multiplayer interaction (with player room codes)</li>
            <li>DB for saving/loading existing games (with user accounts)</li>
            <li>Might generalise to add support for other types of bingo that users can think of (e.g., make your own bingo on your chosen theme)</li>
            <li>Support for other languages e.g., German (if I can still remember it from my GCSE back in 2018), Greek (if Duolingo actually teaches me some relevant words/phrases, although I've only got a streak of 24 days, so might be a few years yet), Spanish, and French (both once I've completed the Greek course on Duolingo)</li>
        </ul>
        <h3>Current Issues</h3>
        <ul>
          {/* 🐈 */}
          <li>Some of the cat images are too close-up, so the image may appear to show a cat without a head/tail/legs etc. in some cases. But, I promise no cats were harmed in the making of this game.</li>
        </ul>
        <h3>Acknowledgements:</h3>
        <ul>
            <li>List of cat breeds from <strong>Wikipedia</strong>, images (mostly Wikimedia Commons, but check individual image credits for details)</li>
            <li><strong>Marcel George/Laurence King Publishing</strong> for the idea</li>
            <li><strong>Chris's friends</strong> at the New Year's Eve party I was invited to, for owning a copy of the game</li>
            <li><strong>Penny and Adam</strong>, for probably being the only people at least showing some interest in wanting to play this at some point haha :)</li>
            { /* ✨ I was enchanted to meet you... ✨ */ }
        </ul>
        <p className='read-the-docs center'>&copy; 2026 Tug O'Flaherty</p>
    </div>
  );
}

export default Acknowledgements;