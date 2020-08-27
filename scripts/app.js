const form = document.querySelector('.search-form');
const UI = document.querySelector('.main-content');
const errorDiv = document.querySelector('.error');
const platform = document.querySelector('#select');

// Event Listener
form.addEventListener('submit', getStats);

// Ui Function
const updateUI = (data, userName, userId) => {
  const statDets = data.statDets;
  // Update details templates
  UI.innerHTML = ` <div class="player-information">
  <div class="player-image">
    <img src="./img/player-image.jpg" alt="" />
  </div>
  <h1>${userName}</h1>
  <span>#${userId}</span>
</div>

<article class="br">
  <div class="overall-stat">
    <img src="./img/br.png" alt="" width="32px" height="32px" />
    <h2>Battle Royale</h2>
    <h4>${statDets.br.gamesPlayed} Matches Played</h4>
  </div>
  <div class="stats">
    <div class="wins wrapper">
      <span>Wins</span>
      <span>${statDets.br.wins}</span>
    </div>
    <div class="kills wrapper">
      <span>Kills</span>
      <span>${statDets.br.kills}</span>
    </div>
    <div class="kdratio wrapper">
      <span>KD.ratio</span>
      <span>${statDets.br.kdRatio.toFixed(2)}</span>
    </div>
    <div class="top-five wrapper">
      <span>Top 5</span>
      <span>${statDets.br.topFive}</span>
    </div>
    <div class="top-ten wrapper">
      <span>Top 10</span>
      <span>${statDets.br.topTen}</span>
    </div>
    <div class="contracts wrapper">
      <span>Contracts</span>
      <span>${statDets.br.contracts}</span>
    </div>
    <div class="score wrapper">
      <span>Score</span>
      <span>${statDets.br.score}</span>
    </div>
    <div class="deaths wrapper">
      <span>Deaths</span>
      <span>${statDets.br.deaths}</span>
    </div>
    <div class="revives wrapper">
      <span>Revives</span>
      <span>${statDets.br.revives}</span>
    </div>
    <div class="downs wrapper">
      <span>Downs</span>
      <span>${statDets.br.downs}</span>
    </div>
  </div>
</article>`;

  // Showing the stats container if the result is found
  if (UI.classList.contains('hide')) {
    UI.classList.remove('hide');
  }
};

const updateStats = async (userName, userId, userPlatform) => {
  const statDets = await getResults(userName, userId, userPlatform);
  return {
    statDets,
  };
};

// Showing error if player is not found
function showerror() {
  if (errorDiv.classList.contains('hide')) {
    errorDiv.classList.remove('hide');
  }

  setTimeout(() => {
    if (errorDiv.classList !== errorDiv.classList.contains('hide')) {
      errorDiv.classList.add('hide');
    }
  }, 4000);
}

// Get Stats function
function getStats(e) {
  e.preventDefault();
  // Getting the user values
  const userName = form.player.value.trim();
  const userId = form.playerId.value.trim();
  const userPlatform = platform.options[platform.selectedIndex].value;

  // Resetting the form
  form.reset();

  // Hiding the results after 15s
  setTimeout(() => {
    if (UI.classList !== UI.classList.contains('hide')) {
      UI.classList.add('hide');
    }
  }, 15000);

  // Calling the UI function inside updateStats promise
  updateStats(userName, userId, userPlatform)
    .then((data) => updateUI(data, userName, userId))
    .catch((err) => showerror());
}
