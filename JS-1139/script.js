function increaseScore(team) {
  const scoreId = `score${team}`;
  const scoreEl = document.getElementById(scoreId);
  let score = parseInt(scoreEl.textContent);
  scoreEl.textContent = ++score;
}

function decreaseScore(team) {
  const scoreId = `score${team}`;
  const scoreEl = document.getElementById(scoreId);
  let score = parseInt(scoreEl.textContent);
  if (score > 0) {
    score--;
    scoreEl.textContent = score;
  } else {
    alert("Score cannot be lower than 0");
  }
}

function resetScore(team) {
  const scoreId = `score${team}`;
  const scoreEl = document.getElementById(scoreId);
  scoreEl.textContent = "0";
}
