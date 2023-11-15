// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
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
  6. Regenerate prompt if Requirement #1 and/or Requirement #3 is not met.
  7. Generate password.
  8. Display on page.
  */

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

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
