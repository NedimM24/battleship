Battleship 🎛 ⚓ 🗺️

A modern, web‑based version of the classic **Battleship** game. Play against the computer with randomly placed ships, track hits and misses, and sink all enemy ships to win!




---

## **Live Demo**

Play it online: [https://nedimm24.github.io/battleship/](https://nedimm24.github.io/battleship/)
<img width="1482" height="1029" alt="image" src="https://github.com/user-attachments/assets/3ae3d02e-e0b4-4c9f-9f92-ee780ab55c69" />
<img width="1488" height="1148" alt="image" src="https://github.com/user-attachments/assets/cd590931-1a6e-4031-9ae2-0097e85d597e" />



---

## **Features**

- **Two Players:** Real player vs. computer AI  
- **Dynamic Gameboards:** 10×10 grids for both players  
- **Random Ship Placement:** Ships placed without overlap or out‑of‑bounds errors  
- **Attack Tracking:** Visual feedback for hits, misses, and sunk ships  
- **Reset Functionality:** Start a new game or reshuffle ships instantly  
- **Responsive UI:** Interactive grid with color‑coded results  
- **Unit Tested:** Core game logic tested with Jest  

## **What I Learned**

- **Game Logic Design:** Structured turn‑based combat with ships, hits, misses, and win conditions  
- **Object-Oriented JavaScript:** Designed reusable `Ship`, `Gameboard`, and `Player` classes  
- **DOM Manipulation:** Dynamically rendered game boards and updated cell states  
- **Testing:** Verified game rules with Jest unit tests  
- **Randomized Algorithms:** Built placement logic that avoids collisions and stays within bounds  
- **UI/UX Design:** Created an interactive grid with clear visual feedback  

## **Roadblocks**

- **Random Ship Placement:** Preventing overlap and out‑of‑bounds placements required careful logic  
- **Tracking Game State:** Managing hits/misses while maintaining accurate board state  
- **DOM Syncing Challenges:** Ensuring UI updates reliably without breaking interactivity  
- **Edge Case Testing:** Handling repeated attacks on the same cell and sinking ships required thorough Jest coverage  

