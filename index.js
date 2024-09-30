// An array of tutorial names
const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

// Function to transform the tutorial names into title case
function titleCased() {
  return tutorials.map(function (tutorial) {
    // Split the tutorial string into words, capitalize the first letter of each word, then join them back into a sentence
    return tutorial
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  });
}

// Exporting the titleCased function for use in tests or other files
module.exports = { titleCased };
