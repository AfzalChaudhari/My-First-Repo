//button description

document.getElementById('btn').addEventListener('click', function() {
  //get user input
  let userInput = document.getElementById('userInput').value;

  //check if user input is empty
  if (userInput.trim() === '') {
    alert('Please enter a value.');
    return;
  }

  //convert user input to uppercase
  let uppercaseInput = userInput.toUpperCase();

  //display the uppercase input in the DOM
  document.getElementById('output').textContent = uppercaseInput;
});