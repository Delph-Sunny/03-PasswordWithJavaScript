// Assignment Code
var generateBtn = document.querySelector("#generate");



//TO DO


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
