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
  emptyArray = [];
  // console.log(passwordLength);
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a valid password length.");
    generatePassword();
  }
  if (confirm("Include special characters?")) {
    emptyArray = emptyArray.concat(specialCharacters);
  };
  if (confirm("Include lower case lettering?")) {
    emptyArray = emptyArray.concat(lowerCase.split(""));
  };
  if (confirm("Include upper case lettering?")) {
    emptyArray = emptyArray.concat(upperCase);
  };
  if (confirm("Include numbers?")) {
    emptyArray = emptyArray.concat(numbers.split(""));
  };
  // console.log(emptyArray);
  randomize(passwordLength, emptyArray);
  return;

 
};



function randomize(passwordLength, emptyArray) {
  var returnValue = "";
  for (var i = 0; i < passwordLength; i++) {
    returnValue += emptyArray[Math.floor(Math.random() * emptyArray.length)];
    };
    // console.log(returnValue);
    // console.log(passwordLength);
    // console.log(emptyArray);
    return returnValue;
};




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
