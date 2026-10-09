# Cadoops Quiz · Hosted by Lex

A phone-controlled quiz party game for 1–100 players, with an optional shared TV screen.

**Play the solo demo:** https://caddikleonj.github.io/CadoopsQuiz/

The GitHub Pages version works as a solo demo immediately. Live rooms need the Node room server deployed. The code for both is included here.

## Features

- 22 categories: General Knowledge, Lord of the Rings, Game of Thrones, Disney, Video Games, Science, Harry Potter, Manchester United, Marvel, DC, Pokémon, Marine Biology, Cats, Animals, Films, TV Shows, Stranger Things, Big Bang Theory, Friends, House of the Dragon, The Walking Dead and Star Wars.
- More than 22,000 usable standard multiple-choice questions, with a v120 quality screen excluding overlong explanation answers; plus dedicated numeric, quote, picture and music-round material.
- 20 round types: Classic Quiz, Buzzer Round, Name That Tune, Steal Round, Toxic Round, Quiz Bingo, Picture This, Higher or Lower, Confidence Bet, Who Said It?, Clue Me In, Who Am I?, Connections, Head-to-Head, Elimination, Category Roulette, The Chasedown, Closest Wins, Final Showdown and Cadoops Chaos.
- Random quizzes and custom round sequences; category selection, timers, player limits and automatic/manual pacing.
- Player names, camera/photo uploads and 12 default avatars. Profiles and recent results saved on that browser.
- Room codes, private answers, server-ordered buzzers, host controls, score corrections and reconnection.
- Lex host character, scripted commentary and optional device speech voice. This is a game character with authored dialogue, not a live ChatGPT connection.
- Host may play too. TV screen never needs a host token. Invite URLs contain only the room code and server address.
- Solo demo with simulated opponents and local resume. It uses the same scoring engine as the multiplayer server.
- v115 stability fixes: quiz planning no longer substitutes duplicate questions across rounds, and Name That Tune requires a correct song title before awarding the optional artist bonus. Automated GitHub Actions tests run on every push.
- v116 live music fixes: built-in player entrance and fastest-answer themes now load from the multiplayer server, including the byte-range responses expected by mobile browsers. The HTTP test now waits through real introduction and countdown phases.
- v117 entrance polish: all 50 intro FX, the profile preview, fastest-correct events, and buzzer celebration use the same centred profile-photo frame and smaller, balanced name sizes that work with long player and bot names. Added static layout regression checks.

- v118 adds **The Ting Tong Song** as a built-in entrance / fastest-answer theme for real and solo-simulated players, including playback previews, multiplayer MP3 streaming and exclusive theme claims.

- v119 alphabetical theme sorting: built-in song theme lists now ignore the leading word **“The”** for sorting while keeping the full displayed title (e.g. “The Ting Tong Song” sorts under T for “Ting”).

- v120: static player profile portraits in all 50 entrance effects (background scenes still animate), server-timed fastest-answer celebrations with a shared correct-answer viewing window, guarded host skipping, and a bank-wide filter for sentence-length explanations. The Alicent coronation question is rewritten as a concise factual question, and two-player synchronization tests are included.

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
| Classic Quiz | Everyone answers. Correct players score on the speed ladder: fastest gets the full active-player count, then one point less per place. |
| Buzzer Round | Fastest finger gets the only attempt. Buzz first, then answer within 5 seconds. |
| Name That Tune | Buzz first. Correct title earns 100 and correct artist earns another 100; a wrong title reopens the music buzzer. |
| Steal Round | Normal speed scoring. The fastest correct player then chooses a rival and steals up to 5 points after the reveal. |
| Toxic Round | Correct answers use normal speed scoring; each wrong answer loses 5 points. |
| Quiz Bingo | Nine clues fill a 3×3 card. Correct answers use speed scoring; each new line adds 300 and a full house adds 1,000. |
| Picture This | Identify the image as it becomes clearer; normal speed scoring applies. |
| Higher or Lower | Decide whether the real number is higher or lower than Lex’s suggestion; normal speed scoring applies. |
| Confidence Bet | Stake up to 500 points, limited by your current score. Correct: 100 + stake. Wrong: lose the stake. |
| Who Said It? | Pick the speaker from four choices; normal speed scoring applies. |
| Clue Me In | Pick the answer to Lex’s clue from four choices; normal speed scoring applies. |
| Who Am I? | Identify the mystery answer from four choices; normal speed scoring applies. |
| Connections | Find the answer connected to the clue; normal speed scoring applies. |
| Head-to-Head | Two players are selected for each question. Only they answer; first correct scores 2 and second correct scores 1. |
| Elimination | Active players answer; the worst performer on each question is knocked out for the rest of that round. |
| Category Roulette | Each question is drawn from a random one of the selected categories. |
| The Chasedown | The current leader is the target. Correct non-leaders earn a +2 chase bonus on top of speed points. |
| Closest Wins | Closest numeric answer earns 50; an exact answer earns 100. Ties share the award. |
| Final Showdown | Eight-second questions with double speed-ladder points. |
| Cadoops Chaos | Twenty-second questions with one secret power card: Double, Shield or Steal. Each card can be used once. |

Photos are cropped and compressed in the browser. Room members can see profile photos. Host tokens and player tokens are stored in their browser and must not be shared. The public repository contains the starter question bank, so this is intended for friendly quiz nights, not proctored competitions.
