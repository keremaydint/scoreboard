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

function setScorePrompt(team) {
  const score = prompt("Enter new score:");
  if (score !== null && !isNaN(score)) {
    const scoreNum = parseInt(score);
    if (Number.isInteger(scoreNum)) {
      document.getElementById(`score${team}`).textContent = scoreNum;
    } else {
      alert("Please enter a valid score");
    }
  } else {
    alert("Invalid value");
  }
}

function setNamePrompt(team) {
  const name = prompt("Enter team name:");
  document.getElementById(`teamName${team}`).textContent = name;
}
