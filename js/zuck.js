// Get global variables from the HTML
var zuckIt = document.getElementById("ZuckIt");
var deZuckIt = document.getElementById("DeZuckIt");
var Clear = document.getElementById("clear");
var About = document.getElementById("about");
var Open = document.getElementById("openFile");
var Save = document.getElementById("save");
var foc = document.getElementById("keyword");
var HowTo = document.getElementById("howToUse");
var message = document.getElementById("textInput");
var keyword = document.getElementById("keyword");
var email = document.getElementById("email");

// Set the alphabet
var alphabet =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789\n.!?,:;'/ ";

// google script ID
var scriptId = "https://www.googleapis.com/auth/script.send_mail";

window.onload = function () {
  // Listen and Handle click events for the buttons
  zuckIt ? zuckIt.addEventListener("click", ZuckIt) : null;
  deZuckIt ? deZuckIt.addEventListener("click", DeZuckIt) : null;
  foc ? foc.focus() : null;
  Clear ? Clear.addEventListener("click", clear) : null;
  Open ? Open.addEventListener("click", getFile) : null;
  Save ? Save.addEventListener("click", saveToFile) : null;
  About ? About.addEventListener("click", about) : null;
  HowTo ? HowTo.addEventListener("click", instructions) : null;
  email ? email.addEventListener("click", sendMail) : null;
};

function decrypt(word, keyword) {
  let decryptWord = "";
  for (let i = 0; i < word.length; i++) {
    decryptWord += alphabet.charAt(
      (alphabet.indexOf(word.charAt(i)) +
        alphabet.length -
        alphabet.indexOf(keyword.charAt(i % keyword.length))) %
        alphabet.length
    );
  }
  return decryptWord;
}

function encrypt(word, keyword) {
  let encryptWord = "";
  for (let i = 0; i < word.length; i++) {
    encryptWord += alphabet.charAt(
      (alphabet.indexOf(word.charAt(i)) +
        alphabet.indexOf(keyword.charAt(i % keyword.length))) %
        alphabet.length
    );
  }
  return encryptWord;
}

function clear() {
  message.value = ""; // clear the message area
  keyword.value = ""; // clear the keyword area
  foc.focus(); // set focus back to the keyword area
}

function copyToClipboard() {
  /* Select the text field */
  message.select();
  message.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  navigator.clipboard.writeText(message.value);
}

function ZuckIt() {
  let result = encrypt(message.value, keyword.value);

  message.value = result;
  copyToClipboard();
}

function DeZuckIt() {
  let result = decrypt(message.value, keyword.value);

  message.value = result;
  copyToClipboard();
}

function saveToFile() {
  // Create a new Blob (html5 magic) that conatins the data from your form feild
  let blob = new Blob([message.value], { type: "text/plain;charset=utf-8" });
  // It is a link to that file
  let url = URL.createObjectURL(blob);
  // Set up the link
  let link = document.createElement("a");
  link.href = url;
  link.download = "message.txt";
  // This part simulate a click event
  let event = new MouseEvent("click");
  link.dispatchEvent(event);
}

function getFile() {
  // create a file selector
  let fileSelector = document.createElement("input");
  fileSelector.type = "file";
  fileSelector.click();
  // wait for the file to be selected
  fileSelector.onchange = function () {
    // get the file
    let file = fileSelector.files[0];
    // create a new FileReader
    let reader = new FileReader();
    // wait for the load event
    reader.onload = function () {
      // put the data into the form feild
      message.value = reader.result;
    };
    // start the reader
    reader.readAsText(file);
  };
  foc.focus();
}

function about() {
  let msg = `Dezuckit version 1.0.0! \n
        David H. Isakson (c) 2021"\n
        Dezuckit is a simple tool to encrypt and decrypt messages.\n
        It is a free software and you can use it for whatever you want.\n
        You can find the source code on GitHub:\n
        github.com/ikeman32/Dezuckit\n\n
        Key features:\n
        - Encrypt and decrypt messages with a password.\n
        - Save the encrypted message to a file.\n
        - Copy the encrypted message to the clipboard.\n
        - Load a file into the form field.\n
        - Clear the form feild.\n`;
  message.value = msg;
}

function instructions() {
  let instruction = `How to use:\n
    1. Type in a keyword.\n
    2. Type in or copy a message.\n
    3. Click on the ZuckIt button.\n
    4. The message is now encrypted.\n
    5. To decrypt repeat steps 1 & 2 then click the DeZuckIt button.\n`;
  message.value = instruction;
}
