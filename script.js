// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var passwordLength = prompt("Enter password length between 8 and 128 characters.");
  passwordLength = parseInt(passwordLength, 10);
  console.log(passwordLength);
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a valid password length.");
    generatePassword();
  }
  var specialCharacters = confirm("Include special characters?");
  var 
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
