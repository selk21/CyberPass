// This function rates the strength of a password entered by the user
function ratePassword() {

  const password = document.getElementById("value").value;
  const password_rating_Text = document.getElementById("password-rating");
  
  // Define password rating levels and their appropiate feedback/advice
  const WEAK = "Weak!; Your password is most likely very short or only contains one type of character sets. Try adding other types of characters such as numbers or symbols that are different from your character set.";
  const FAIR = "Fair!; Your password most likely contains characters from two or less character sets. Try including a character from a set different from your character sets.";
  const STRONG = "Strong!; Your password most likely contains characters from all three character sets. Try increasing your password length by a few more characters. ";
  const VERY_STRONG = "Very Strong!";
  
  // Define minimum password length required for each rating level
  const MIN_LENGTH = 8;
  
  let password_Rating = 0;
  
  // Check the length of the password and assign a rating based on the length
  if (password.length < MIN_LENGTH) {
  password_Rating = 0;
  }
  else if (password.length >= MIN_LENGTH && password.length <= 10) {
  password_Rating = 1;
  }
  else if (password.length > 10 && password.length <= 15) {
  password_Rating = 2;
  }
  else if (password.length > 15) { 
  password_Rating = 3;
  }
  
  // Increment password rating if the password contains at least one digit, uppercase letter and lowercase letter, and special symbol
  if (password.match(/[0-9]/)) {
  password_Rating++;
  }
  if (password.match(/[A-Z]/)) {
  password_Rating++;
  }
  if (password.match(/[a-z]/)) {
  password_Rating++;
  }
  if (password.match(/[^\w\s]/)) {
    password_Rating++;
  }
  
  
  // Set password rating text and color based on the password rating
  if (password_Rating === 0 || password_Rating === 1 || password_Rating === 2) {
  password_rating_Text.innerHTML = WEAK;
  password_rating_Text.style.color = "red";
  }
  else if (password_Rating === 3) {
  password_rating_Text.innerHTML = FAIR;
  password_rating_Text.style.color = "orange";
  }
  else if (password_Rating === 4) {
  password_rating_Text.innerHTML = STRONG;
  // 'lightgreen' looks too bright and is hard to read
  password_rating_Text.style.color = "rgb(58, 216, 58)";
  }
  else {
  password_rating_Text.innerHTML = VERY_STRONG;
  password_rating_Text.style.color = "green";
  }
  }
  
  // Add a click event listener to the "checkPass" button on the HTML page and call the ratePassword function when clicked
  document.getElementById("checkPass").addEventListener("click", ratePassword);