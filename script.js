const textarea0 = document.querySelector("#text-0");
const textarea1 = document.querySelector("#text-1");
const btnOutputEditSwitch = document.querySelector("#btn-output-edit-switch");

let outputLock = true;
const originKey = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","X","y","z","1","2","3","4","5","6","7","8","9","0"," ","`","~","-","=","_","+","[","{","]","}","\\","|",";",":","'",'"',",","<",".",">","/","?","!","@","#","$","%","^","&","*","(",")",
];
const digiKey = ["MOD_SHIFT_LEFT, KEY_A","MOD_SHIFT_LEFT, KEY_B","MOD_SHIFT_LEFT, KEY_C","MOD_SHIFT_LEFT, KEY_D","MOD_SHIFT_LEFT, KEY_E","MOD_SHIFT_LEFT, KEY_F","MOD_SHIFT_LEFT, KEY_G","MOD_SHIFT_LEFT, KEY_H","MOD_SHIFT_LEFT, KEY_I","MOD_SHIFT_LEFT, KEY_J","MOD_SHIFT_LEFT, KEY_K","MOD_SHIFT_LEFT, KEY_L","MOD_SHIFT_LEFT, KEY_M","MOD_SHIFT_LEFT, KEY_N","MOD_SHIFT_LEFT, KEY_O","MOD_SHIFT_LEFT, KEY_P","MOD_SHIFT_LEFT, KEY_Q","MOD_SHIFT_LEFT, KEY_R","MOD_SHIFT_LEFT, KEY_S","MOD_SHIFT_LEFT, KEY_T","MOD_SHIFT_LEFT, KEY_U","MOD_SHIFT_LEFT, KEY_V","MOD_SHIFT_LEFT, KEY_W","MOD_SHIFT_LEFT, KEY_X","MOD_SHIFT_LEFT, KEY_Y","MOD_SHIFT_LEFT, KEY_Z","KEY_A","KEY_B","KEY_C","KEY_D","KEY_E","KEY_F","KEY_G","KEY_H","KEY_I","KEY_J","KEY_K","KEY_L","KEY_M","KEY_N","KEY_O","KEY_P","KEY_Q","KEY_R","KEY_S","KEY_T","KEY_U","KEY_V","KEY_W","KEY_X","KEY_Y","KEY_Z","KEY_1","KEY_2","KEY_3","KEY_4","KEY_5","KEY_6","KEY_7","KEY_8","KEY_9","KEY_0","KEY_SPACE","KEY_TILDE","KEY_TILDE, MOD_SHIFT_LEFT","KEY_MINUS","KEY_EQUAL","KEY_MINUS, MOD_SHIFT_LEFT","KEY_EQUAL, MOD_SHIFT_LEFT","KEY_LEFT_BRACE","KEY_LEFT_BRACE, MOD_SHIFT_LEFT","KEY_RIGHT_BRACE","KEY_RIGHT_BRACE, MOD_SHIFT_LEFT","KEY_BACKSLASH","KEY_BACKSLASH, MOD_SHIFT_LEFT","KEY_SEMICOLON","KEY_SEMICOLON, MOD_SHIFT_LEFT","KEY_QUOTE","KEY_QUOTE, MOD_SHIFT_LEFT","KEY_COMMA","KEY_COMMA, MOD_SHIFT_LEFT","KEY_PERIOD","KEY_PERIOD, MOD_SHIFT_LEFT","KEY_SLASH","KEY_SLASH, MOD_SHIFT_LEFT","KEY_1, MOD_SHIFT_LEFT","KEY_2, MOD_SHIFT_LEFT","KEY_3, MOD_SHIFT_LEFT","KEY_4, MOD_SHIFT_LEFT","KEY_5, MOD_SHIFT_LEFT","KEY_6, MOD_SHIFT_LEFT","KEY_7, MOD_SHIFT_LEFT","KEY_8, MOD_SHIFT_LEFT","KEY_9, MOD_SHIFT_LEFT","KEY_0, MOD_SHIFT_LEFT",
];

let eventChange = new Event("change");
let eventClick = new Event("click");
let primaryString = "";
let outputString = "";
textarea0.addEventListener("change", () => {
  primaryString = textarea0.value;
  for (let i = 0; i < primaryString.length; i++) {
    for (let j = 0; j < originKey.length; j++) {
      if (primaryString[i] === originKey[j]) {
        outputString += `DigiKeyboard.sendKeyStroke(${digiKey[j]})\n`;
      }
    }
  }
  outputString = outputString.substring(0, outputString.length - 1);
  textarea1.value = outputString;
  console.log(outputString);
  outputString = "";
});

const refreshTextArea0 = () => {
  textarea0.dispatchEvent(eventChange);
};
textarea0.addEventListener("keyup", () => {
  refreshTextArea0();
});
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
};
btnOutputEditSwitch.addEventListener("click", () => {
  outputEditSwitch();
});
btnOutputEditSwitch.dispatchEvent(eventClick);
