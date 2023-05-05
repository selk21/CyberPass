const result_Element1 = document.getElementById('result1');
const generate_Element = document.getElementById('generate');
const clipboard_Element = document.getElementById('clipboard');
const length_Element = document.getElementById('length');
const uppercase_Element = document.getElementById('uppercase');
const lowercase_Element = document.getElementById('lowercase');
const numbers_Element = document.getElementById('numbers');
const symbols_Element = document.getElementById('symbols');

// Character sets for the possible combinations of password generations
const uppercase_Letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercase_Letters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+-={}[]:";\'<>?,./|\\';

function generatePassword() {
  let password = '';

  // Get characters to include based on the user's input
  const characters_to_Include = [];
  if (uppercase_Element.checked) {
    characters_to_Include.push(...uppercase_Letters);
  }
  if (lowercase_Element.checked) {
    characters_to_Include.push(...lowercase_Letters);
  }
  if (numbers_Element.checked) {
    characters_to_Include.push(...numbers);
  }
  if (symbols_Element.checked) {
    characters_to_Include.push(...symbols);
  }

  // Generate password based on the user's input
  for (let i = 0; i < length_Element.value; i++) {
    const random_Index = Math.floor(Math.random() * characters_to_Include.length);
    password += characters_to_Include[random_Index];
  }

  return password;
}

// Add an event listener to the 'Generate password' button
generate_Element.addEventListener('click', () => {
  const password = generatePassword();
  result_Element1.textContent = password;
});

// Add an event listener to the 'Copy' button
clipboard_Element.addEventListener('click', () => {
  const text_Area = document.createElement('textarea');
  const password = result_Element1.textContent;

  if (!password) {
    return;
  }

  text_Area.value = password;
  document.body.appendChild(text_Area);
  text_Area.select();
  document.execCommand('copy');
  text_Area.remove();

  alert('Password copied to clipboard');
});