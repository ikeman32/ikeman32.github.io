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
var email = document.getElementsByClassName("logo")[0];

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
        Scripts By Duke\n
        Dezuckit is a simple tool to encrypt and decrypt messages.\n
        It is a free software and you can use it for whatever you want.\n
        You can find the source code on GitHub:\n
        github.com/ikeman32/Dezuckit\n\n
        Key features:\n
        - Encrypt and decrypt messages with a password.\n
        - Save the encrypted message to a file.\n
        - Automatic copy to clipboard.\n
        - Load a file into the form field.\n
        - Clear the form feild.\n
        \n
        How to contact me:\n
        - Click on the logo to send me an email.\n
        - You can also send me an email at: scriptsbyduke at gmail dot com\n
        \n
        Why did you make this?\n
        - Originally this tool was called Fzuck short of F*Zuckenberg\n
        and all it did was phonetically spell every character you could type.\n
        including newlines, punctuation marks, and spaces.\n
        - I was and still am angry with FB and their censorship algorithms.\n
        Not because I didn't want unfettered freedom of speech,\n
        but because these algorithms often got it wrong and can not determine context.\n
        - Also, I believe that they gave their algorithms too much power.\n
        And I was not about to accept discipline from a computer algorthim.\n
        Only a human making that decision is acceptable in my opinion.\n
        Algorithms are useful and should flag questionable content and recommend 
        a course of action, but allow a human to make the decision.\n
        - I observed that FB's algorithms were not able to process misspellings and 
        other nonsensical text so I created Fzuck as a proof of concept.\n
        - After two years of testing out the first interation of this tool,\n
        I found that I was right about the algorithms.\n
        - Since the first interation was never meant to a secure encyption,\n
        I decided to make this tool a more secure encyption tool.\n
        Thus dezuckit was born.\n
        Disclaimer: This tool is not intended to be used for any illegal purpose.\n
        It is not intended to be used for any purpose that could result in harm to a person.\n
        It is not intended to be used for any purpose that could result in harm to any property.\n
        It is not intended to be used for any purpose that could result in harm to any organization.\n
        It is not intended to be used for any purpose that could result in harm to any government.\n
        You use this tool at your own risk.\n
        This tool is provided as is and I am not responsible for any damage done due to misuse of this tool.\n
        \n
        I do not collect any personal information with this or any other tool.\n
        Nor do I intend to do so, ever.\n
        \n
        Thank you for using Dezuckit!\n`;
  message.value = msg;
}

function instructions() {
  let instruction = `How to use:\n
    1. Type in a keyword.\n
    2. Type in or copy a message.\n
    3. Click on the ZuckIt button.\n
    4. The message is now encrypted.\n
    5. To decrypt repeat steps 1 & 2 then click the DeZuckIt button.\n\n
    How to save:\n
    1. Click on the SaveToFile button.\n\n
    How to load a text file:\n
    1. Click on the OpenFile button.\n
    2. Select a text file.\n
    3. Click on the Open button in the dialog.\n\n
    How to contact me:\n
      - Click on the logo to send me an email.\n
      - You can also send me an email at: scriptsbyduke at gmail dot com\n`;
  message.value = instruction;
}

// Send an email to the developer
function sendMail() {
  // Create a new message
  let msg = {
    to: "scriptsbyduke@gmail.com",  
    subject: "Dezuckit: I have a question/feature request",
  };
  // Set up the link
  let link = document.createElement("a");
  link.href = `mailto:${msg.to}?subject=${msg.subject}`;
  // This part simulate a click event
  let event = new MouseEvent("click");
  link.dispatchEvent(event);
}