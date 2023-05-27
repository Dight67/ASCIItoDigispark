const textarea0 = document.querySelector("#text-0");
const textarea1 = document.querySelector("#text-1");
const btnOutputEditSwitch = document.querySelector("#btn-output-edit-switch");

let outputLock = true;

let eventChange = new Event("change");
let eventClick = new Event("click");
let primaryString = "";
let outputString = "";
textarea0.addEventListener("change", () => {
  primaryString = textarea0.value;
  for (const key in primaryString) {
switch (primaryString[key]) {
  case "A": outputString += "DigiKeyboard.sendKeyStroke(MOD_SHIFT_LEFT, KEY_A)\n"; break;
  case "B": outputString += "DigiKeyboard.sendKeyStroke(MOD_SHIFT_LEFT, KEY_B)\n"; break;
  case "C": outputString += "DigiKeyboard.sendKeyStroke(MOD_SHIFT_LEFT, KEY_C)\n"; break;
  case "D": outputString += "DigiKeyboard.sendKeyStroke(MOD_SHIFT_LEFT, KEY_D)\n"; break;
  case "E": outputString += "DigiKeyboard.sendKeyStroke(MOD_SHIFT_LEFT, KEY_E)\n"; break;
  case "F": outputString += "DigiKeyboard.sendKeyStroke(MOD_SHIFT_LEFT, KEY_F)\n"; break;
  case "G": outputString += "DigiKeyboard.sendKeyStroke(MOD_SHIFT_LEFT, KEY_G)\n"; break;
  case "H": outputString += "DigiKeyboard.sendKeyStroke(MOD_SHIFT_LEFT, KEY_H)\n"; break;
  case "I": outputString += "DigiKeyboard.sendKeyStroke(MOD_SHIFT_LEFT, KEY_I)\n"; break;
  case "J": outputString += "DigiKeyboard.sendKeyStroke(MOD_SHIFT_LEFT, KEY_J)\n"; break;
  case "K": outputString += "DigiKeyboard.sendKeyStroke(MOD_SHIFT_LEFT, KEY_K)\n"; break;
  case "L": outputString += "DigiKeyboard.sendKeyStroke(MOD_SHIFT_LEFT, KEY_L)\n"; break;
  case "M": outputString += "DigiKeyboard.sendKeyStroke(MOD_SHIFT_LEFT, KEY_M)\n"; break;
  case "N": outputString += "DigiKeyboard.sendKeyStroke(MOD_SHIFT_LEFT, KEY_N)\n"; break;
  case "O": outputString += "DigiKeyboard.sendKeyStroke(MOD_SHIFT_LEFT, KEY_O)\n"; break;
  case "P": outputString += "DigiKeyboard.sendKeyStroke(MOD_SHIFT_LEFT, KEY_P)\n"; break;
  case "Q": outputString += "DigiKeyboard.sendKeyStroke(MOD_SHIFT_LEFT, KEY_Q)\n"; break;
  case "R": outputString += "DigiKeyboard.sendKeyStroke(MOD_SHIFT_LEFT, KEY_R)\n"; break;
  case "S": outputString += "DigiKeyboard.sendKeyStroke(MOD_SHIFT_LEFT, KEY_S)\n"; break;
  case "T": outputString += "DigiKeyboard.sendKeyStroke(MOD_SHIFT_LEFT, KEY_T)\n"; break;
  case "U": outputString += "DigiKeyboard.sendKeyStroke(MOD_SHIFT_LEFT, KEY_U)\n"; break;
  case "V": outputString += "DigiKeyboard.sendKeyStroke(MOD_SHIFT_LEFT, KEY_V)\n"; break;
  case "W": outputString += "DigiKeyboard.sendKeyStroke(MOD_SHIFT_LEFT, KEY_W)\n"; break;
  case "X": outputString += "DigiKeyboard.sendKeyStroke(MOD_SHIFT_LEFT, KEY_X)\n"; break;
  case "Y": outputString += "DigiKeyboard.sendKeyStroke(MOD_SHIFT_LEFT, KEY_Y)\n"; break;
  case "Z": outputString += "DigiKeyboard.sendKeyStroke(MOD_SHIFT_LEFT, KEY_Z)\n"; break;
  // -----
  case "a": outputString += "DigiKeyboard.sendKeyStroke(KEY_A)\n"; break;
  case "b": outputString += "DigiKeyboard.sendKeyStroke(KEY_B)\n"; break;
  case "c": outputString += "DigiKeyboard.sendKeyStroke(KEY_C)\n"; break;
  case "d": outputString += "DigiKeyboard.sendKeyStroke(KEY_D)\n"; break;
  case "e": outputString += "DigiKeyboard.sendKeyStroke(KEY_E)\n"; break;
  case "f": outputString += "DigiKeyboard.sendKeyStroke(KEY_F)\n"; break;
  case "g": outputString += "DigiKeyboard.sendKeyStroke(KEY_G)\n"; break;
  case "h": outputString += "DigiKeyboard.sendKeyStroke(KEY_H)\n"; break;
  case "i": outputString += "DigiKeyboard.sendKeyStroke(KEY_I)\n"; break;
  case "j": outputString += "DigiKeyboard.sendKeyStroke(KEY_J)\n"; break;
  case "k": outputString += "DigiKeyboard.sendKeyStroke(KEY_K)\n"; break;
  case "l": outputString += "DigiKeyboard.sendKeyStroke(KEY_L)\n"; break;
  case "m": outputString += "DigiKeyboard.sendKeyStroke(KEY_M)\n"; break;
  case "n": outputString += "DigiKeyboard.sendKeyStroke(KEY_N)\n"; break;
  case "o": outputString += "DigiKeyboard.sendKeyStroke(KEY_O)\n"; break;
  case "p": outputString += "DigiKeyboard.sendKeyStroke(KEY_P)\n"; break;
  case "q": outputString += "DigiKeyboard.sendKeyStroke(KEY_Q)\n"; break;
  case "r": outputString += "DigiKeyboard.sendKeyStroke(KEY_R)\n"; break;
  case "s": outputString += "DigiKeyboard.sendKeyStroke(KEY_S)\n"; break;
  case "t": outputString += "DigiKeyboard.sendKeyStroke(KEY_T)\n"; break;
  case "u": outputString += "DigiKeyboard.sendKeyStroke(KEY_U)\n"; break;
  case "v": outputString += "DigiKeyboard.sendKeyStroke(KEY_V)\n"; break;
  case "w": outputString += "DigiKeyboard.sendKeyStroke(KEY_W)\n"; break;
  case "X": outputString += "DigiKeyboard.sendKeyStroke(KEY_X)\n"; break;
  case "y": outputString += "DigiKeyboard.sendKeyStroke(KEY_Y)\n"; break;
  case "z": outputString += "DigiKeyboard.sendKeyStroke(KEY_Z)\n"; break;
  // -----
  case "1": outputString += "DigiKeyboard.sendKeyStroke(KEY_1)\n"; break;
  case "2": outputString += "DigiKeyboard.sendKeyStroke(KEY_2)\n"; break;
  case "3": outputString += "DigiKeyboard.sendKeyStroke(KEY_3)\n"; break;
  case "4": outputString += "DigiKeyboard.sendKeyStroke(KEY_4)\n"; break;
  case "5": outputString += "DigiKeyboard.sendKeyStroke(KEY_5)\n"; break;
  case "6": outputString += "DigiKeyboard.sendKeyStroke(KEY_6)\n"; break;
  case "7": outputString += "DigiKeyboard.sendKeyStroke(KEY_7)\n"; break;
  case "8": outputString += "DigiKeyboard.sendKeyStroke(KEY_8)\n"; break;
  case "9": outputString += "DigiKeyboard.sendKeyStroke(KEY_9)\n"; break;
  case "0": outputString += "DigiKeyboard.sendKeyStroke(KEY_0)\n"; break;
  // -----
  case " ": outputString += "DigiKeyboard.sendKeyStroke(KEY_SPACE)\n"; break;
  case "`": outputString += "DigiKeyboard.sendKeyStroke(KEY_TILDE)\n"; break;
  case "~": outputString += "DigiKeyboard.sendKeyStroke(KEY_TILDE, MOD_SHIFT_LEFT)\n"; break;
  case "-": outputString += "DigiKeyboard.sendKeyStroke(KEY_MINUS)\n"; break;
  case "=": outputString += "DigiKeyboard.sendKeyStroke(KEY_EQUAL)\n"; break;
  case "_": outputString += "DigiKeyboard.sendKeyStroke(KEY_MINUS, MOD_SHIFT_LEFT)\n"; break;
  case "+": outputString += "DigiKeyboard.sendKeyStroke(KEY_EQUAL, MOD_SHIFT_LEFT)\n"; break;
  case "[": outputString += "DigiKeyboard.sendKeyStroke(KEY_LEFT_BRACE)\n"; break;
  case "{": outputString += "DigiKeyboard.sendKeyStroke(KEY_LEFT_BRACE, MOD_SHIFT_LEFT)\n"; break;
  case "]": outputString += "DigiKeyboard.sendKeyStroke(KEY_RIGHT_BRACE)\n"; break;
  case "}": outputString += "DigiKeyboard.sendKeyStroke(KEY_RIGHT_BRACE, MOD_SHIFT_LEFT)\n"; break;
  case "\\":outputString += "DigiKeyboard.sendKeyStroke(KEY_BACKSLASH)\n"; break;
  case "|": outputString += "DigiKeyboard.sendKeyStroke(KEY_BACKSLASH, MOD_SHIFT_LEFT)\n"; break;
  case ";": outputString += "DigiKeyboard.sendKeyStroke(KEY_SEMICOLON)\n"; break;
  case ":": outputString += "DigiKeyboard.sendKeyStroke(KEY_SEMICOLON, MOD_SHIFT_LEFT)\n"; break;
  case "'": outputString += "DigiKeyboard.sendKeyStroke(KEY_QUOTE)\n"; break;
  case "\"":outputString += "DigiKeyboard.sendKeyStroke(KEY_QUOTE, MOD_SHIFT_LEFT)\n"; break;
  case ",": outputString += "DigiKeyboard.sendKeyStroke(KEY_COMMA)\n"; break;
  case "<": outputString += "DigiKeyboard.sendKeyStroke(KEY_COMMA, MOD_SHIFT_LEFT)\n"; break;
  case ".": outputString += "DigiKeyboard.sendKeyStroke(KEY_PERIOD)\n"; break;
  case ">": outputString += "DigiKeyboard.sendKeyStroke(KEY_PERIOD, MOD_SHIFT_LEFT)\n"; break;
  case "/": outputString += "DigiKeyboard.sendKeyStroke(KEY_SLASH)\n"; break;
  case "?": outputString += "DigiKeyboard.sendKeyStroke(KEY_SLASH, MOD_SHIFT_LEFT)\n"; break;
  case "!": outputString += "DigiKeyboard.sendKeyStroke(KEY_1, MOD_SHIFT_LEFT)\n"; break;
  case "@": outputString += "DigiKeyboard.sendKeyStroke(KEY_2, MOD_SHIFT_LEFT)\n"; break;
  case "#": outputString += "DigiKeyboard.sendKeyStroke(KEY_3, MOD_SHIFT_LEFT)\n"; break;
  case "$": outputString += "DigiKeyboard.sendKeyStroke(KEY_4, MOD_SHIFT_LEFT)\n"; break;
  case "%": outputString += "DigiKeyboard.sendKeyStroke(KEY_5, MOD_SHIFT_LEFT)\n"; break;
  case "^": outputString += "DigiKeyboard.sendKeyStroke(KEY_6, MOD_SHIFT_LEFT)\n"; break;
  case "&": outputString += "DigiKeyboard.sendKeyStroke(KEY_7, MOD_SHIFT_LEFT)\n"; break;
  case "*": outputString += "DigiKeyboard.sendKeyStroke(KEY_8, MOD_SHIFT_LEFT)\n"; break;
  case "(": outputString += "DigiKeyboard.sendKeyStroke(KEY_9, MOD_SHIFT_LEFT)\n"; break;
  case ")": outputString += "DigiKeyboard.sendKeyStroke(KEY_0, MOD_SHIFT_LEFT)\n"; break;
  // -----
  default: outputString += ""; break;
}
  }
  outputString = outputString.substring(0, outputString.length-1)
  textarea1.value = outputString;
  console.log(outputString);
  outputString = "";
});
const refreshTextArea0 = () => {textarea0.dispatchEvent(eventChange)}
textarea0.addEventListener("keyup", () => {  
    refreshTextArea0();
})
const outputEditSwitch = () => {
  if (outputLock === true) {
    btnOutputEditSwitch.innerHTML = "Output edit: OFF";
    outputLock = false;
    textarea1.readOnly = true;
  } else {
    btnOutputEditSwitch.innerHTML = "Output edit: ON";
    outputLock = true;
    textarea1.readOnly = false;
  }
}
btnOutputEditSwitch.addEventListener("click", () => {
  outputEditSwitch();
})
btnOutputEditSwitch.dispatchEvent(eventClick);