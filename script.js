// Added variables for the password, special characters, lower/upper case letters, and numbers.  Added a variable for an empty array so all the choices the user chooses will be put into the empty array.
var generateBtn = document.querySelector("#generate");
// Made the special characters variable a normal array.
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "<", ">", "[", "]", "{", "}", "/", "?"];
// Made the lower case letter variable a string and in the functions when i added the variable into the empty array i used .split ("") to turn whats in the string into an array.
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
// Made the upper case letter variable equal to what was in the lower case variable which was a string of lowercase letters and use .toUpperCase() to turn all the letters uppercase and used .split() to make the variable an array.
var upperCase = lowerCase.toUpperCase().split("");
// Made the numbers variable a string and when i use it in the function i put a .split() to make it into an array.
var numbers = "1234567890";
// Put the emptyArray variable equal to an empy array and put it up top to put it in the general scope.
var emptyArray = [];
// Put the variable returnValue up here in the general scope because when i tried to return the value in the functions it would be undefined.  Putting it in the general scope allowed all the functions to see it.
var returnValue;


// Generate password function askes for the user to input how many characters they would like their password to have between 8 and 128 characters.
// It checks to see if what the user inputted was a number with parseInt, it then goes into an if statement. If any of the parameters are true then the alert will pop up notifying the user that they must input a valid password length and the generate password function reactivates prompting the user to input a number of characters they want in their password.
// If they pass the if statement it then goes into the else statement which calls the characters function and makes the returnValue variable equal to the randomize function.
// Then after the if else statement it returns the returnValue to the function.
function generatePassword() {
  var passwordLength = prompt("Enter password length between 8 and 128 characters.");
  passwordLength = parseInt(passwordLength, 10);
  // console.log(passwordLength);
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a valid password length.");
    generatePassword();
  } else {
    characters();
    returnValue = randomize(passwordLength, emptyArray);
    return returnValue;
  };
  
};

// The characters function asked the user with confirm prompts whetehr the user wants special characters, lower/uppercase and numbers in their password.
// Once they click either click OK or Cancel on the confirm prompts in the browser that true or false gets stored, if they choose okay we combine the original variables above with the strings and concat them into the empty array variable.
function characters() {
  emptyArray = [];
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
};


// The randomize function has a variable for returnValue with an empty string, we add a for loop to allow the password to be randomized with the inputs the user put into the empty array.
// The user gets an alert message tha their password has been generated and the returnValue gets returned.
function randomize(passwordLength, emptyArray) {
  var returnValue = "";
  for (var i = 0; i < passwordLength; i++) {
    returnValue += emptyArray[Math.floor(Math.random() * emptyArray.length)];
  };
  alert("Your password has been generated!");
  return returnValue;
};




// The write password function allows for the password that has been generated to be displayed in the dashed box in the webpage.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// adds a click event listener
generateBtn.addEventListener("click", writePassword);
