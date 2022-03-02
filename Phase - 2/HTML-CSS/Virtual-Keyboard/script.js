let input = "";
let deleteContent = "";
let capslockCounter = 0;

function toTextArea(inp) {
  if (capslockCounter == 0 || capslockCounter % 2 == 0) {
    if (inp.innerHTML[4] == "s") {
      input += inp.innerText.slice(inp.innerText.length - 1);
    } else {
      input += inp.innerText.toLowerCase();
    }
  } else {
    if (inp.innerHTML[4] == "s") {
      input += inp.innerText.slice(0, 1);
    } else {
      input += inp.innerText;
    }
  }
  document.getElementById("text").value = input;
}

function backspace() {
  input = document.getElementById("text").value;
  input = input.substr(0, input.length - 1);
  document.getElementById("text").value = input;
}

// function del() {
//     input = document.getElementById("text").value;
//     input = input.substr(0, input.length - 1);
//     document.getElementById("text").value = input;
//   }

function capslock() {
  capslockCounter++;
}

function enter() {
  let ent = "\r\n";

  input += ent;
}
