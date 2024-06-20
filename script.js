function shortcut(s1, s2) {
  // Check if either of the input strings is empty
  if (s1.length === 0 || s2.length === 0) {
    return '';
  }
  
  // Return the initial letters of both strings
  return s1[0] + s2[0];
}

// Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
