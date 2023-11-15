/* 
REQUIREMENTS
------------
1. Length must be between 8-128 characters.
2. User can choose to include lowercase, uppercase, numeric, and/or special characters.
3. User MUST choose AT LEAST ONE character type.

PSUEDO CODE
------------
1. Prompt for desired length.
2. Prompt for including lowercase.
3. Prompt for including uppercase.
4. Prompt for including numeric.
5. Prompt for including special characters.
6. Input validation.
7. Generate password.
8. Display on page.
*/

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  // 1. Prompt for desired length.
  var length = validateLength();

  // 2. Prompt for including lowercase characters.
  var includeLowerCase = window.confirm("Include lowercase?");
  // 3. Prompt for including uppercase characters.
  var includeUpperCase = window.confirm("Include uppercase?");
  // 4. Prompt for including numeric characters.
  var includeNumbers = window.confirm("Include numbers?");
  // 5. Prompt for including special characters.
  var includeSpecialCharacters = window.confirm("Include special characters?");

  // stores user's input values
  var characters = [includeLowerCase, includeUpperCase, includeNumbers, includeSpecialCharacters];
  // makes sure at least one of the 4 types is selected
  characters = validateCharacterTypes(characters);

  // all possible lists of characters to choose from (at least for this project)
  const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseLetters = lowerCaseLetters.toUpperCase();
  const numbers = "0123456789";
  const specialCharacters = `!"#$%&'()*+,-./:;<=>?@[]^_{|}~`;

  // creates string of characters to choose from, used to generate password
  let characterLibrary = "";
}

// Prompts for length and redisplays if requirements aren't met.
function validateLength() {
  var length = window.prompt("Password length (please enter a number between 8-128)", "");
  if (length === "") {
    return validateLength();
  } else if (length < 8 || length > 128) {
    return validateLength();
  } else {
    return length;
  }
}

// Checks that at least one of the character types is selected
function validateCharacterTypes(characters) {
  if (!characters[0] && !characters[1] && !characters[2] && !characters[3]) {
    alert("Please include AT LEAST ONE character type (lowercase, uppercase, numbers, special characters)");
    characters[0] = window.confirm("Include lowercase?");
    characters[1] = window.confirm("Include uppercase?");
    characters[2] = window.confirm("Include numbers?");
    characters[3] = window.confirm("Include special characters?");
    return validateCharacterTypes(characters);
  } else {
    return characters;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
