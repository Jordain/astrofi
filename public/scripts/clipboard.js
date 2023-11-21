// clipboard.js

function copyToClipboard() {
  var codeBlock = document.getElementById("codeBlock");

  if (codeBlock) {
    var codeText = codeBlock.textContent;
    
    navigator.clipboard.writeText(codeText)
      .then(() => {
        console.log('Text copied to clipboard');
        // Optionally, provide user feedback (e.g., display a message)
      })
      .catch((err) => {
        console.error('Unable to copy text to clipboard', err);
        // Optionally, provide user feedback on the error
      });
  } else {
    console.error('Code block element not found');
    // Optionally, provide user feedback on the absence of the code block
  }
}