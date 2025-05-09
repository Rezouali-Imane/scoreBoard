let homeScore = 0;
let guestScore = 0;
let homeFouls = 0;
let guestFouls = 0;
let period = 1;
let seconds = 0;
let minutes = 0;

function updateScore(team, points) {
  if (team === 'home') {
    homeScore += points;
    document.getElementById('homeScore').textContent = homeScore;
  } else {
    guestScore += points;
    document.getElementById('guestScore').textContent = guestScore;
  }
  updateLeader();
}

function updateLeader() {
  const home = document.getElementById('homeTeam');
  const guest = document.getElementById('guestTeam');
  home.classList.remove('leader');
  guest.classList.remove('leader');

  if (homeScore > guestScore) {
    home.classList.add('leader');
  } else if (guestScore > homeScore) {
    guest.classList.add('leader');
  }
}

function addFoul(team) {
  if (team === 'home') {
    homeFouls++;
    document.getElementById('homeFouls').textContent = homeFouls;
  } else {
    guestFouls++;
    document.getElementById('guestFouls').textContent = guestFouls;
  }
}

function nextPeriod() {
  period++;
  document.getElementById('period').textContent = period;
}

function newGame() {
  homeScore = guestScore = homeFouls = guestFouls = 0;
  period = 1;
  minutes = seconds = 0;
  document.getElementById('homeScore').textContent = '0';
  document.getElementById('guestScore').textContent = '0';
  document.getElementById('homeFouls').textContent = '0';
  document.getElementById('guestFouls').textContent = '0';
  document.getElementById('period').textContent = '1';
  document.getElementById('timer').textContent = '00:00';
  updateLeader();
}

// Timer logic
setInterval(() => {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  let minStr = minutes.toString().padStart(2, '0');
  let secStr = seconds.toString().padStart(2, '0');
  document.getElementById('timer').textContent = `${minStr}:${secStr}`;
}, 1000);
