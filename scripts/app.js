const form = document.querySelector('.search-form');
const UI = document.querySelector('.main-content');
const stats = document.querySelector('.br');
form.addEventListener('submit', getStats);

// Ui Function
const updateUI = (data) => {
  const statDets = data.statDets;
  const html = `<div class="overall-stat">
<img src="./img/br.png" alt="" width="32px" height="32px" />
<h2>Battle Royale</h2>
<h4>${statDets.gamesPlayed}</h4>
</div>
<div class="stats">
<div class="wins wrapper">
  <span>Wins</span>
  <span>977</span>
</div>
<div class="kills wrapper">
  <span>Kills</span>
  <span>645</span>
</div>
<div class="kdratio wrapper">
  <span>KD.ratio</span>
  <span>1.17</span>
</div>
<div class="top-five wrapper">
  <span>Top 5</span>
  <span>30</span>
</div>
<div class="top-ten wrapper">
  <span>Top 10</span>
  <span>85</span>
</div>
<div class="contracts wrapper">
  <span>Contracts</span>
  <span>60</span>
</div>
<div class="score wrapper">
  <span>Scores</span>
  <span>34568</span>
</div>
<div class="deaths wrapper">
  <span>Deaths</span>
  <span>540</span>
</div>
<div class="revives wrapper">
  <span>Revives</span>
  <span>30</span>
</div>
<div class="downs wrapper">
  <span>Downs</span>
  <span>800</span>
</div>
<div class="games-played wrapper">
  <span>Games Played</span>
  <span>120</span>
</div>
</div>
</article>`;
  // Update details templates
  stats.innerHTML = html;
};

const updateStats = async (userName, userId) => {
  const statDets = await getResults(userName, userId);
  return {
    statDets,
  };
};

// Get Stats function
function getStats(e) {
  e.preventDefault();
  // Getting the user values
  const userName = form.player.value.trim();
  const userId = form.playerId.value.trim();
  form.reset();

  // Calling the UI function
  updateStats(userName, userId)
    .then((data) => updateUI(data))
    .catch((err) => console.log(err));
}
