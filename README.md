# Scoreboard JS Counter

 a simple scoreboard counter for tracking game scores, fouls, and periods. It includes a live timer to track the game time and features for resetting the game, switching periods, and updating scores and fouls for two teams (home and guest).

## Features

- Track scores for two teams (home and guest).
- Count fouls for both teams.
- Track periods of the game.
- Display a timer that increments every second (in MM:SS format).
- Dynamically highlight the leading team.
- Reset game stats and start a new game.

## Functions

### `updateScore(team, points)`
- Updates the score for the specified team.
- **Parameters:**
  - `team` (string): Either `'home'` or `'guest'`.
  - `points` (number): Points to add to the team's score.
  
### `addFoul(team)`
- Adds one foul to the specified team's foul count.
- **Parameters:**
  - `team` (string): Either `'home'` or `'guest'`.

### `nextPeriod()`
- Increments the period number and updates the display.

### `newGame()`
- Resets all scores, fouls, periods, and the timer to start a new game.

### Timer Logic
- The timer increments every second and updates the display in `MM:SS` format.
