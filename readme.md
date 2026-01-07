## Cat Bingo

### Introduction

**What can I say...?**

It's a HTML5/JS/CSS cat bingo web game (based on [the *popular* board game of the same name](https://www.laurenceking.com/products/cat-bingo?srsltid=AfmBOooKzshGlu1dIoBTBm3QPPFpcoaE0PmZSHbLiEgWiqcth1exvamt)) that lets players compete to match all the breeds of cat on their bingo card first! The complete list of cat breeds, images, and image credits are from [Wikipedia](https://en.wikipedia.org/wiki/List_of_cat_breeds) (*obviously* the most reliable source of information!), and the random bingo cards contain 16 cats in a square arrangement.

### Features

All features coming soon<!--, but for now, just:!-->
<!--* Return all cat breeds in a random order each time, to create a calling list:
```
GET {baseurl:port}/call
```
* Return a randomly-generated bingo card each time, containing 16 cats:
```
GET {baseurl:port}/card
```!-->

### TODOs:
* BingoCard.jsx: 
    - Fix styling
    - Fix layout (use 4x4 grid)
    - Add collected/remove functionality (highlight the squares)
    - Add clear all counters functionality (reset all square highlighting)
* Add the easter eggs ;)

### Coming Soon
* The actual game you care so much about playing (hopefully!)
* Web sockets to facilitate multiplayer interaction (with player room codes)
* DB for saving/loading existing games (with user accounts)
* Might generalise to add support for other types of bingo that users can think of (e.g., make your own bingo on your chosen theme)
* Support for other languages e.g., German (if I can still remember it from my GCSE back in 2018), Greek (if Duolingo actually teaches me some relevant words/phrases, although I've only got a streak of 24 days, so might be a few years yet), Spanish, and French (both once I've completed the Greek course on Duolingo)

### Acknowledgements:
* List of cat breeds from **Wikipedia**, images (mostly Wikimedia Commons, but check individual image credits for details)
* **Marcel George/Laurence King Publishing** for the idea
* **Chris's friends** at the New Year's Eve party I was invited to, for owning a copy of the game
* **Penny and Adam**, for probably being the only people at least showing some interest in wanting to play this at some point haha :)

<!-- 

Hmm, maybe I should put some easter eggs in the code or README, just for fun!

Maybe there will be hidden messages that you'll have to decode in random places all over the place... only one way to find out :)

Does anyone ever really read the code or raw markdown version of the README?  

(I did just think of this, so I'll have to go back and add some fun stuff to the API code too, oops)

If you are reading this, the easter eggs haven't yet been added (well, maybe some have, but it's down to you to work out what they are - isn't this all part of the game too?)

Last update: 7th Jan 2026

!-->