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
function generatePassword() {
  var array4Password = "";  // Declare to store final password
  var userLength; 
  var chars = "";
  const typeListText = ["lowercase", "uppercase", "number", "special"];
  let booleanTypeList = [];
  // variables of string for each type
  let upperChar = String.fromCharCode(...Array(91).keys()).slice(65),//A-Z
      lowerChar = String.fromCharCode(...Array(123).keys()).slice(97),//a-z
      numberList = String.fromCharCode(...Array(58).keys()).slice(48),//0-9
      specialChar = " !\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~";
  
  // Call function to get user input
  userLength =Number(readNumber());   // Change type to Number
  
  // Get the character types user choices
  do {
    alert("Please choose at least one of the following 4 character types.");
    for (var i = 0; i < 4; i++) {
      booleanTypeList[i] = userChoice(typeListText[i]);
    } 
  } while (!booleanTypeList[0] && !booleanTypeList[1] && !booleanTypeList[2] && !booleanTypeList[3]);

  // Create a list of combined chosen type lists
  if (booleanTypeList[0]) {chars = lowerChar;};
  if (booleanTypeList[1]) {chars = chars + upperChar;};
  if (booleanTypeList[2]) {chars = chars + numberList;};
  if (booleanTypeList[3]) {chars = chars + specialChar;};
   
   // Add each random characters to create password
  for (i = 0; i < userLength; i++) {                   
    var c = Math.floor(Math.random()*chars.length) + 1;
    array4Password += chars.charAt(c);
  }
  return array4Password;
}
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
