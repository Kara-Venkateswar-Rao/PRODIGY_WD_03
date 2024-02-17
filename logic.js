let btns = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let winmassage = document.querySelector(".winner-msg");

let img = ["cross.png", "round.png"];

const wins = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

reset.addEventListener("click", () => {
  btns.forEach((btn) => {
    btn.innerText = "";
    winmassage.innerText = "Click on any box to start the game";
    btn.disabled = false;
  });
});

let track = true;
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (track) {
      btn.innerText = "0";
      track = false;
    } else {
      btn.innerText = "X";
      track = true;
    }
    btn.disabled = true;

    checkWinner();
  });
});

function disabled() {
  for (let btn of btns) {
    btn.disabled = true;
  }
}

function checkWinner() {
  for (let pattern of wins) {
    // console.log(btns[pattern[0]].innerText, btns[pattern[1]].innerText, btns[pattern[2]].innerText);

    const posval1 = btns[pattern[0]].innerText;
    const posval2 = btns[pattern[1]].innerText;
    const posval3 = btns[pattern[2]].innerText;

    if (posval1 !== "" && posval2 !== "" && posval3 !== "") {
      if (posval1 === posval2 && posval2 === posval3) {
        winmassage.innerText = `The Winner is ${posval1}`;
        disabled();
      }
    }
  }
}
