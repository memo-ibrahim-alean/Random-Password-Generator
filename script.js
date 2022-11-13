const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let count = 1;
let firstPassword = "";
let secondPassword = "";
let generateButtonEl = document.getElementById("generate-btn");
let firstInputEl = document.getElementById("input1");
let secondInputEl = document.getElementById("input2");
let passwordLengthEl = document.querySelector("#password-length")
let inputLength = 15;

passwordLengthEl.addEventListener("change", (event) => {
  passwordLengthEl.value = event.target.value;
  inputLength = parseInt(passwordLengthEl.value);
});

function copyInput1() {
  // Get the text field
  let copyText = firstInputEl;

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  alert("Copied the text: " + copyText.value);
}

function copyInput2() {
  // Get the text field
  let copyText = secondInputEl;

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  alert("Copied the text: " + copyText.value);
}

  function generatePassword() {

    if(passwordLengthEl.value === "") {
      inputLength = 15;
    }

      for (let i = 0; i < characters.length; i++) {
        let fristRandomIndex = Math.floor(Math.random() * characters.length);
        let secondRandomIndex = Math.floor(Math.random() * characters.length);

        firstPassword += characters[fristRandomIndex];
        secondPassword += characters[secondRandomIndex];

        if (inputLength < 10 || inputLength > 20) {
          alert("please enter number from 10 - 20 !!!!");
          reset();
          break;
        }

        if (count === inputLength) {
          firstInputEl.value = firstPassword;
          secondInputEl.value = secondPassword;
          count = 1;
          firstPassword = "";
          secondPassword = "";
          break;
        }

        count += 1;
      }
  }


function reset() {
  count = 1;
  firstPassword = "";
  secondPassword = "";
  firstInputEl.value = "";
  secondInputEl.value = "";
  passwordLengthEl.value = "";
  inputLength = 15;
}
