 // Get references to the button and span element
 const button = document.querySelector('.btn');
 const nameSpan = document.getElementById('name');

 // Add event listener to the button
 button.addEventListener('click', () => {
   // Prompt the user for input and update the span element with the input value
   const Name = prompt('Enter your name:');
   
   if (Name !== null) { // Check if the user clicked cancel
     nameSpan.textContent = Name;
   }
 });