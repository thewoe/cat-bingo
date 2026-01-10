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
        <h2 className='center'>About | Acknowledgements</h2>
        <h3>Introduction</h3>
        <p><strong>What can I say...?</strong></p>
        <p>It's a HTML5/JS/CSS cat bingo web game (based on <a href='https://www.laurenceking.com/products/cat-bingo?srsltid=AfmBOooKzshGlu1dIoBTBm3QPPFpcoaE0PmZSHbLiEgWiqcth1exvamt' target='_blank'>the <em>popular</em> board game of the same name</a>) that lets players compete to match all the breeds of cat on their bingo card first! The complete list of cat breeds, images, and image credits are from <a href='https://en.wikipedia.org/wiki/List_of_cat_breeds' target='_blank'>Wikipedia</a> (<em>obviously</em> he most reliable source of information!), and the random bingo cards contain 16 cats in a square arrangement.</p>
        <h3>Features</h3>
        <ul>
          <li>Simple, multiplayer cat bingo game for any number of players (<em><strong>reminder:</strong> don't hate the player, hate the game</em>)</li>
        </ul>
        <h3>How To Play</h3>
        <ul>
          <li>Decide on who is going to be the cat bingo caller (this could be a cat, but doesn't have to be).</li>
          <li>The bingo caller presses the 'Be the Bingo Caller!' button on the homepage, and once everyone is ready, presses the 'Next Cat!' button. They should read out or share their screen with the other players, to let them know of the next cat being called. They may also play too, by opening their own bingo card in another browser window/tab.</li>
          <li>The players press the 'Get a Bingo Card!' button on the homepage. They must press the 'Get a New Bingo Card!' to receive a new bingo card (this can be done multiple times before the game starts, if they want to change cards!). The bingo card will be displayed below. Once a cat is called by the bingo caller, that you have on your card, mark it on your card by clicking on the appropriate square. Your score will increment, and once you get all 16 cats, you have won, so call out 'MEOW!' in your loudest cat voice! To play again, you can either get a new bingo card, or reset your existing card, if you think it will be lucky next round! To uncheck a cat you accidentally checked, just click its square again to clear it. There are 16 cats to collect per card!</li>
        </ul>
        <h3>Coming Soon</h3>
        <ul>
          <li>Web sockets to facilitate multiplayer interaction (with player room codes)</li>
          <li>DB for saving/loading existing games (with user accounts)</li>
          <li>Might generalise to add support for other types of bingo that users can think of (e.g., make your own bingo on your chosen theme)</li>
          <li>Support for other languages e.g., German (if I can still remember it from my GCSE back in 2018), Greek (if Duolingo actually teaches me some relevant words/phrases, although I've only got a streak of 24 days, so might be a few years yet), Spanish, and French (both once I've completed the Greek course on Duolingo)</li>
          <li>Leaderboard</li>
          <li>Ads, so I can hopefully make some money out of this lol</li>
        </ul>
        <h3>Current Issues</h3>
        <ul>
          {/* 🐈 */}
          <li>Some of the cat images are too close-up, so the image may appear to show a cat without a head/tail/legs etc. in some cases. But, I promise no cats were harmed in the making of this game.</li>
        </ul>
        <h3>Acknowledgements:</h3>
        <ul>
            <li>List of cat breeds from <strong>Wikipedia</strong>, images (mostly Wikimedia Commons, but check individual image credits for details)</li>
            <li>Audio from <strong>Freesound</strong> (*obviously*): meow-1.wav by nathan-osman -- <a href='https://freesound.org/s/686775/'>https://freesound.org/s/686775/</a> -- License: Creative Commons 0 and juich 1.wav by fons -- <a href='https://freesound.org/s/62375/'>https://freesound.org/s/62375/</a> -- License: Creative Commons 0</li>
            <li><strong>Marcel George/Laurence King Publishing</strong> for the idea</li>
            <li><strong>Chris's friends</strong> at the New Year's Eve party I was invited to, for owning a copy of the game</li>
            <li><strong>Penny and Adam</strong>, for probably being the only people at least showing some interest in wanting to play this at some point haha :)</li>
            { /* ✨ I was enchanted to meet you... ✨ */ }
        </ul>
        <h3>Contributions</h3>
        <p><strong>Γειά σου! Want to contribute...?</strong></p>
        <p>This web game is so complex that you will need strong experience in catology (minimum 5+ years), and at least 1 hour of experience in React/HTML5/CSS/Express etc. We can tell when you use ChatGPT to respond to our questions, so don't even consider...</p>
        <p className='read-the-docs center'>&copy; 2026 Tug O'Flaherty</p>
    </div>
  );
}

export default Acknowledgements;