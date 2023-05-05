const value_Element = document.getElementById('value');
const result_Element = document.getElementById('result');

// Function to call the check function from 'check.js' to check the password
const checkPassword = () => {
  check(value_Element.value);
};

// Function to handle the check result
const handleCheck = ({ detail }) => {
  // Update the result element based on the check result
  result_Element.textContent = detail 
    ? "This password was compromised in a database breach according to https://haveibeenpwned.com/Passwords Please use a different password!" 
    : "This password was not compromised in any database breach according to https://haveibeenpwned.com/Passwords Great job!";
};

// Add an event listener to the checkPass button
document.getElementById('checkPass').addEventListener('click', checkPassword);

// Add a listener for the check event found in 'check.js'
document.addEventListener('check', handleCheck);


