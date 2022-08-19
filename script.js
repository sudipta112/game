let score = 20;
let highestscore = 0;
let randomSecretnum = Math.floor(Math.random() * 20) + 1;
// document.querySelector(".number").textContent = randomSecretnum;


document.querySelector(".check").addEventListener("click", () => {
  let inputNumber = Number(document.querySelector(".guess").value);
  //   console.log(number, typeof number);
  if (!inputNumber) {
    document.querySelector(".message").innerHTML = "PLEASE ENTER A NUMBER";
  }
  else if (inputNumber === randomSecretnum) {

    document.querySelector(".message").innerHTML = "YOU WON🎇🎉🎇✔";
    document.querySelector(".number").textContent = inputNumber;
    score++;
    document.querySelector(".score").innerHTML = score;
    document.querySelector("body").style.backgroundColor = "rgb(93, 240, 117)";

    if (score > highestscore) {
      highestscore = score;
      document.querySelector(".highscore").textContent = highestscore;
    }

    document.querySelector('.check').disabled = true;//  ⏫⏫ 
  }
  // WRONG GUESS 1
  else if (inputNumber > randomSecretnum) {
    document.querySelector('.message').textContent = "Too High and try again👍";
    score--;
    document.querySelector('.score').textContent = score
    if (score >= 1) {
      document.querySelector('.score').textContent = score;

    }
    else {
      document.querySelector('.score').textContent = 0;

    }

  }
  //  WRONG GUESS 2
  else if (inputNumber < randomSecretnum) {
    document.querySelector('.message').textContent = "Too Low and try again👍";
    score--;
    document.querySelector('.score').textContent = score;
    if (score >= 1) {
      document.querySelector('.score').textContent = score;

    }
    else {
      document.querySelector('.score').textContent = 0;

    }

  }


});
// AGAIN BUTTON OR RESET BUTTON
document.querySelector('.btn').addEventListener('click', () => {
  score = 20;
  randomSecretnum = Math.floor(Math.random() * 20) + 1;
  document.querySelector(".number").textContent = randomSecretnum;
  document.querySelector('.number').textContent = '??'
  document.querySelector(".guess").value = ""
  document.querySelector('.score').textContent = score;
  document.querySelector('.check').disabled = false;
  document.querySelector('.message').textContent = "start guessing🎉🎉";
  document.querySelector("body").style.backgroundColor = " #222";
})
