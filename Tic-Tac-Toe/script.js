let turn = new Audio("ting.mp3");
let music = new Audio("music.mp3");
let gameOver = new Audio("gameover.mp3");
let gameTurn = "X";
let Gameover = false;

const changeTurn = () => {
  return gameTurn === "X" ? "0" : "X";
};
checkWin = () => {
  let boxtexts = document.getElementsByClassName("boxtext");
  let wins = [
    [0, 1, 2, 5, 5, 0],
    [3, 4, 5, 5, 15, 0],
    [6, 7, 8, 5, 25, 0],
    [0, 3, 6, -5, 15, 90],
    [1, 4, 7, 5, 15, 90],
    [2, 5, 8, 15, 15, 90],
    [0, 4, 8, 5, 15, 45],
    [2, 4, 6, 5, 15, 135],
  ];
  wins.forEach((e) => {
    if (
      boxtexts[e[0]].innerText == boxtexts[e[1]].innerText &&
      boxtexts[e[1]].innerText == boxtexts[e[2]].innerText &&
      boxtexts[e[0]].innerText != ""
    ) {
      Gameover = true;
      gameOver.play();
      document.querySelector(".info").innerText =
        boxtexts[e[1]].innerText + " Won!";
      document
        .querySelector(".imgbox")
        .getElementsByTagName("img")[0].style.width = "175px";
      document.querySelector(
        ".aline"
      ).style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
      document.querySelector(".aline").style.width = "20vw";
    }
  });
};
music.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxText = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    if (boxText.innerText == "") {
      boxText.innerText = gameTurn;
      gameTurn = changeTurn();
      turn.play();
      checkWin();
      if (!Gameover) {
        document.getElementsByClassName("info")[0].innerText =
          "Turn For " + gameTurn;
      }
    }
  });
});
reset = () => {
  let boxtext = document.getElementsByClassName("boxtext");
  Array.from(boxtext).forEach((e) => {
    e.innerText = "";
  });
  document.querySelector(".aline").style.width = "0";
  gameTurn = "X";
  Gameover = false;
  document.getElementsByClassName("info")[0].innerText = "Turn For " + gameTurn;
  document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width =
    "0";
};
