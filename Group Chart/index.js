const data =
  "New Delhi is the capital of India and a part of the National Capital Territory of Delhi.";
const userInputElement = document.getElementById("inputElement");
const userDisplayElement = document.getElementById("paraDisplayElement");
let correctANS = "";
let incorrectANS = "";
let correct = false;
let dataLength= data.length;
userInputElement.addEventListener("input", () => {
  const arraydata = userDisplayElement.querySelectorAll("span");
  const arravalue = userInputElement.value.split("");
  arraydata.forEach((Characterspan, index) => {
    const Character = arravalue[index];

    if (Character == null) {
      Characterspan.classList.remove("correct");
      Characterspan.classList.remove("incorrect");
      correct = false;
      correctANS =0;
      incorrectANS=0;
    } else if (Character === Characterspan.innerText) {
      Characterspan.classList.add("correct");
      Characterspan.classList.remove("incorrect");
      correctANS++;
      document.getElementById("correctvalue").innerHTML = correctANS;
    } else {
      Characterspan.classList.add("incorrect");
      Characterspan.classList.remove("correct");
      incorrectANS++;
      correct = false;
      document.getElementById("incorrectvalue").innerHTML = incorrectANS;
    }
  });
  if(correct) Score()
});


function Score(){
    userInputElement.value = null;
    document.getElementById("correctvalue").innerHTML = correctANS;
    document.getElementById("incorrectvalue").innerHTML = incorrectANS;
}

function dataloading() {
    userDisplayElement.innerHTML = '';
    data.split("").forEach((Character) => {
    const CharacterSpan = document.createElement("span");
    CharacterSpan.innerText = Character;
    userDisplayElement.appendChild(CharacterSpan);
  });
 
  userInputElement.value = null;
}
