// Global variables declaration
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#toCopy");
var passwordText = document.querySelector("#password");


// Gray out copy button until a password is generated
copyBtn.style.backgroundColor = "hsl(206, 17%, 28%)";


// Function to prompt the password length
function readNumber() {
  var num;
  do {
    num = prompt("Enter the characters length of your password (8 to 128): ", 0);
    num = Number(num);                                        // Change type to number 
  } while (!(num >= 8 && num <= 128) || (num % 1 != 0) );  
  return num;  
}


// Function to prompt for character types
function userChoice(val) {
  var boolVal; 
  boolVal = confirm(`Do you want ${val}?`); 
  return boolVal;
}

/******** Function to generate a password of x characters ********/
function generatePassword() {
  var array4Password = "";  // Declare to store final password
  var pwdLength;
  var chars = "";
  const typeListText = ["lowercase", "uppercase", "number", "special"];
  var booleanTypeList = [];
  // variables of string for each type
  let upperChar = String.fromCharCode(...Array(91).keys()).slice(65),//A-Z
      lowerChar = String.fromCharCode(...Array(123).keys()).slice(97),//a-z
      numberList = String.fromCharCode(...Array(58).keys()).slice(48),//0-9
      specialChar = " !\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~";
  
  // Call function to get user input
  pwdLength = readNumber(); 
  
  // Get the character types user choices - Need at least one type
  do {
    alert("Please choose at least one of the following 4 character types.");
    for (let i = 0; i < 4; i++) {
      booleanTypeList[i] = userChoice(typeListText[i]);
    } 
  } while (!booleanTypeList[0] && !booleanTypeList[1] && !booleanTypeList[2] && !booleanTypeList[3]);

  // Create a list of combined chosen type lists
  if (booleanTypeList[0]) {chars = lowerChar;};
  if (booleanTypeList[1]) {chars = chars + upperChar;};
  if (booleanTypeList[2]) {chars = chars + numberList;};
  if (booleanTypeList[3]) {chars = chars + specialChar;};
   
   // Add each random characters to create password
  for (let i = 0; i < pwdLength; i++) {                   
    var c = Math.floor(Math.random()*chars.length) + 1;
    array4Password += chars.charAt(c);
  }

  // Un-Gray out copy button
  copyBtn.style.backgroundColor = "hsl(360, 91%, 36%)";
  
  return array4Password;
  }
/*********** End a password generator function ***********/

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Copy password into clipboard only when there is a password 
function copyClipboard() {
  if (passwordText.value != "") {
    passwordText.select();
    document.execCommand("copy");
  }
}

// Add event listener to copy button
copyBtn.addEventListener("click", copyClipboard);
