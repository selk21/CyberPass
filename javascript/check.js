/*
* Reference: https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest
*/

// Function hashes a string using SHA-1 encryption and returns a hexadecimal string
async function hash(password) {
  // Convert the input string into a buffer using the UTF-8 encoding
  const buffer = new TextEncoder("utf-8").encode(password);
  // Hash the buffer using SHA-1 encryption and await the result
  const hash_Buffer = await crypto.subtle.digest("SHA-1", buffer);

  // Convert the hash buffer into an array of hexadecimal string values
  const view = new DataView(hash_Buffer);
  const hex_Array = [];
  for (let i = 0; i < view.byteLength; i += 4) {
    const value = view.getUint32(i);
    const string_Value = value.toString(16);
    const padding = '00000000';
    const padded_Value = (padding + string_Value).slice(-padding.length);
    hex_Array.push(padded_Value);
  }

  // Return the hexadecimal string by joining the array of string values
  return hex_Array.join("");
}

/*
* Reference: https://haveibeenpwned.com/API/v2#PwnedPasswords
*/

// Function checks whether a given password has been 'pwned' using the Have I Been Pwned API
async function check(password) {
  // Hash the password using SHA-1 encryption and convert the first five characters of the hash into a string
  const hash_Value = await hash(password);
  const hash_Chars = hash_Value.slice(5).toUpperCase();

  // Construct the URL to query the API for password hashes beginning with the same five characters as the input password hash
  const url = `https://api.pwnedpasswords.com/range/${hash_Value.substring(0, 5)}`;
  // Fetch the response from the API and await the result
  const response = await fetch(url);
  const text = await response.text();

  // Check whether the input password hash matches any of the hashes returned by the API
  let result = false;
  const hashes = text.split('\n');
  for (let i = 0; i < hashes.length; i++) {
    if (hashes[i].substring(0, 35) === hash_Chars) {
      result = true;
      break; 
    }
  }

  // Create and dispatch a custom event containing the result of the check
  const event = new CustomEvent('check', {detail: result});
  document.dispatchEvent(event);
}

  