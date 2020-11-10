// Assignment Code
var generateBtn = document.querySelector("#generate");

// Prompt for a number from 8 to 128
function readNumber() {
  let num;
  do {
    num = prompt("Enter the characters length of your password (8 to 128): ", 0);
  } while (!isFinite(num) || !(num >= 8 && num <= 128));
  return num;  
}


// Prompt for character types
function userChoice(val) {
  let boolVal = confirm("Do you want " + val +"?"); 
  return boolVal;
}

/******** Function to generate a password of x characters ********/










/*********** End a password generator function ***********/

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Copy password into clipboard //TO FIX
function myFunction() {
  var copyText = document.querySelector("#password");
  copyText.select();
  document.execCommand("copy");
}

// Add event listener to copy button
document.querySelector("#toCopy").addEventListener("click", myFunction);
