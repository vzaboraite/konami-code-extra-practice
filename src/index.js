// https://en.wikipedia.org/wiki/Konami_Code

/*
- Create a section after the logo with the code sequence inside as a reference for the User, You can come up with the style for it
- Listen for keyboard inputs, and keep track if the user is pressing the keys sequence in the right order
- If the User input the right sequence, make the logo spin

Tips
- Think about how you can keep track of the user inputs. The code should reset if you make a mistake
- HTML and CSS can be changed with Javascript
*/

// 1.0 renderSequenceSection(keys)
// create <section> and append to document.body (has to appear after <img> in HTML)
// code sequence as reference for the user (up, up, down, down, left, right, left, right, B, A)
// - create an array of konamiCode, render it on the page
// - using for loop create <li> elements with innerText that is a konamiCode key?, append element to <section> element

// input: array of konamiCode
// output: -



// 2.0 Add event listener for the keyboard inputs
// => https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent
// => do research on keydown vs keyup events
// - keep track of user inputs:
//  - declare variable and assign user input (userSequence[])


// 3.0 check user input

// input: konamiSequence and userSequence arrays
// output: -
//  if the sequence is wrong, reset the code
//  if the sequence is right, make logo spin
//  - use bridge to <img> - ".konami-logo"
