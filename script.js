// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "<", ">", "[", "]", "{", "}", "/", "?"];
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = lowerCase.toUpperCase().split("");
var numbers = "1234567890";
var emptyArray = [];



function generatePassword() {
  var passwordLength = prompt("Enter password length between 8 and 128 characters.");
  passwordLength = parseInt(passwordLength, 10);
  // console.log(passwordLength);
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a valid password length.");
    generatePassword();
  }
  if (confirm("Include special characters?")) {
    emptyArray.concat(specialCharacters);
  };
  if (confirm("Include lower case lettering?")) {
    emptyArray.concat(lowerCase.split(""));
  };
  if (confirm("Include upper case lettering?")) {
    emptyArray.concat(upperCase);
  };
  if (confirm("Include numbers?")) {
    emptyArray.concat(numbers.split(""));
  };
  return;
};

function randomize(passwordLength) {
  var returnValue = "";
  for (var i = 0; i < passwordLength; i++) {
    returnValue += emptyArray[Math.floor(Math.random() * emptyArray.length)];
    
  }
}

// code for if statements above for the variables are true or not


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
