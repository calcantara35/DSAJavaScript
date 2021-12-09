// Question:
// Create a function that reverses a string:
// Input: "Hi My name is Cesar"
// Output: "rasec si eman yM iH"

function reverseString(str) {
  // check input
  if (!str || str.length < 2 || typeof str != "string") {
    return "hmm thats not good";
  }

  // reverse array
  const backwards = [];
  // totalItems will the length of the string given
  const totalItems = str.length - 1;
  // loop through array starting from the last element, adding each element to the new backwards array
  for (let i = totalItems; (i = 0); i--) {
    backwards.push(str[i]);
  }

  // returning/transforming the backwards array to the string that was given in reverse
  return backwards.join("");
}
