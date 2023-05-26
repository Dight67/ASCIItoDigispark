const textarea0 = document.querySelector("#text-0");
const textarea1 = document.querySelector("#text-1");
const btnTranslate = document.querySelector("#btn-translate");
const btnClear = document.querySelector("#btn-clear");
const btnAutoTranslate = document.querySelector("#btn-auto-translate");
let key;
switch (key) {
  case "A":
    break;
  default:
    break;
}
let eventChange = new Event("change");
let primaryString = "";
let outputString = "";
textarea0.addEventListener("change", () => {
  primaryString = textarea0.value;
  for (const key in primaryString) {
    outputString+="DigiKeyboard.sendKeyStroke(KEY_"+primaryString[key].toUpperCase()+");\n";
  }
  textarea1.value = outputString
  console.log(outputString);
  outputString = ""
});
const refreshTextArea0 =() => {textarea0.dispatchEvent(eventChange)}
textarea0.addEventListener("keyup", () => {  
    refreshTextArea0()
})
