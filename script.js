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
  4. Prompt for including special characters.
  5. Regenerate prompt if Requirement #1 and/or Requirement #3 is not met.
  6. Generate password.
  7. Display on page.
  */
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
