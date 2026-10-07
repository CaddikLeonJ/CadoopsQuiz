# Cadoops Quiz · Hosted by Lex

A phone-controlled quiz party game for 1–100 players, with an optional shared TV screen.

**Play the solo demo:** https://caddikleonj.github.io/CadoopsQuiz/

The GitHub Pages version works as a solo demo immediately. Live rooms need the Node room server deployed. The code for both is included here.

## Features

- 22 categories: General Knowledge, Lord of the Rings, Game of Thrones, Disney, Video Games, Science, Harry Potter, Manchester United, Marvel, DC, Pokémon, Marine Biology, Cats, Animals, Films, TV Shows, Stranger Things, Big Bang Theory, Friends, House of the Dragon, The Walking Dead and Star Wars.
- 21,965 unique standard multiple-choice questions after the v105 quality audit, plus dedicated numeric, quote, clue, picture and music-round material.
- 20 round types: Classic Quiz, Buzzer Round, Name That Tune, Steal Round, Toxic Round, Quiz Bingo, Picture This, Higher or Lower, Confidence Bet, Who Said It?, Clue Me In, Who Am I?, Connections, Head-to-Head, Elimination, Category Roulette, The Chasedown, Closest Wins, Final Showdown and Cadoops Chaos.
- Random quizzes and custom round sequences; category selection, timers, player limits and automatic/manual pacing.
- Player names, camera/photo uploads and 12 default avatars. Profiles and recent results saved on that browser.
- Room codes, private answers, server-ordered buzzers, host controls, score corrections and reconnection.
- Lex host character, scripted commentary and optional device speech voice. This is a game character with authored dialogue, not a live ChatGPT connection.
- Host may play too. TV screen never needs a host token. Invite URLs contain only the room code and server address.
- Solo demo with simulated opponents and local resume. It uses the same scoring engine as the multiplayer server.

## Deploy multiplayer on Render

1. Sign in to https://dashboard.render.com/ using GitHub.
2. Create a **Blueprint** from `CaddikLeonJ/CadoopsQuiz`. `render.yaml` selects a free Node web service.
3. Deploy and copy the resulting `https://…onrender.com` address.
4. Open that address: it serves the full game and connects to its room server automatically.
5. To use the GitHub Pages address too, set `window.CADOOPS_SERVER` in `config.js` to the deployed address. Alternatively, enter it under Settings in the game; invite links carry it to other players.

Manual service setup: runtime **Node**, build command `npm install`, start command `npm start`, health check `/api/health`. Select **Free** if offered. No API keys, paid speech service or package dependencies are required.

Render documentation: https://render.com/docs/deploy-node-express-app and https://render.com/docs/free

### Operational limits

Free Render services can sleep when idle; waking one may take about a minute. Rooms are currently in memory and are removed after six hours without a state change. A server restart or redeploy ends active rooms. Saved profiles/results remain on players’ browsers, but live game recovery across server restarts requires adding a persistent database. A 100-player cap is enforced and covered by automated tests; performance with 100 physical phones has not been verified.

Music round support is complete but there are no bundled commercial song clips. Add short audio clips and their accepted answers in quiz setup. Each clip must be below 2 MB and total request size below 16 MB. Pictures can be uploaded for any category; the built-in Picture This pack covers General Knowledge flags and shapes. Who Said It? contains a smaller dedicated quote pack. The setup validates available question counts and reports insufficient packs instead of repeating questions.

## Run locally

Requires Node 22 or newer.

```sh
npm start
```

Visit http://localhost:3000. For other devices on a local network, use a HTTPS deployment; secure contexts are needed for some browser features.

```sh
npm test
```

Tests cover every mode, the 100-player limit, answer privacy, score limits, card rules, tied guesses, buzz ordering, pause/resume and multi-client HTTP interactions.

## Round rules

| Round | Rules |
|---|---|
| Classic | Everyone answers. Correct players are ranked by server submission time; with N players the fastest correct answer gets N points, then N−1, downwards. |
| Buzzer | Fastest tap gets the first attempt; a wrong answer reopens the buzzer for remaining players. |\n| Music | First buzzer locks for 12 seconds; title and artist each earn 100. Wrong title reopens buzzers for players who have not attempted. |
| Evil | Correct answers use the speed ladder and steal 5 points from the selected rival. Wrong answers lose 5 points. |
| Bingo | Nine clues, personal shuffled answer cards; correct square earns 100, each new line earns 300, full house earns 1,000. |
| Picture | Image clears gradually; correct answer earns 100. |
| Higher/Lower | Compare a factual number to Lex’s suggestion; correct answer earns 100. |
| Confidence Bet | Stake 0–500, limited to current score. Right: 100 + stake; wrong: lose stake. |
| Who Said It? | Identify a short quote’s character or source; 100 per correct answer. |
| Closest Wins | Closest guess earns 50 points; an exact answer earns 100. Tied closest guesses share the award. |
| Final | Eight seconds and 200 points per correct answer. |
| Chaos | Correct answers earn 100. One secret power per quiz: double the correct reward, shield from steals, or steal 5 on a correct answer. |

Photos are cropped and compressed in the browser. Room members can see profile photos. Host tokens and player tokens are stored in their browser and must not be shared. The public repository contains the starter question bank, so this is intended for friendly quiz nights, not proctored competitions.
