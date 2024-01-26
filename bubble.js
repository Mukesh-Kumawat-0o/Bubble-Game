// function make bubbles ===============
function makeBubbles() {
  const element = document.getElementById("bubbles");
  let clutter = "";

  for (let i = 0; i <= 351; i++) {
    let randomNum = Math.floor(Math.random() * 10);
    clutter += `<p class="bubble-game">${randomNum}</p>`;
  }
  element.innerHTML = clutter;
}

// function to change hit bubble ============
let hitBubbleVal = 0;
function getHittedBubble() {
  hitBubbleVal = Math.floor(Math.random() * 10);
  document.getElementById("hitVal").textContent = hitBubbleVal;
}
// function to increase score ============
let score = 0;
function increaseScore() {
  score += 10;
  document.getElementById("scoreVal").textContent = score;
}

// function to select targeted bubble ============
const startFirst = () => {
  document.getElementById("bubbles").addEventListener("click", (dets) => {
    let val = dets.target.textContent; // geting a string
    let num = Number(val); // type conversion

    if (hitBubbleVal === num) {
      increaseScore();
      getHittedBubble();
      makeBubbles();
    }
  });
};

//function to run timer ====================
let totalTime = 59;
let timerInterval;
function timer() {
  timerInterval = setInterval(() => {
    if (totalTime >= 0) {
      const element = document.getElementById("timer");
      element.textContent = totalTime;
      totalTime--;
    } else {
      clearInterval(timerInterval);
      let newDiv = `
        <div class="afterGame">
          <h2>GaMe OvEr</h2>
          <h2>Your Score ${score}</h2>
          <h4>Click On Reload, then Click On Start To Play Again</h4>
        </div>
      `;
      document.getElementById("bubbles").innerHTML = newDiv;
    }
  }, 1000);
}

// function to  start
document.getElementById("start").addEventListener("click", () => {
  if (totalTime >= 0) {
    clearInterval(timerInterval);
    timer();
  }
  startFirst();
  getHittedBubble();
});

// function to re-start
document.getElementById("restart").addEventListener("click", () => {
  location.reload();
});

makeBubbles();
