// document.getElementById('bookingForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent the default form submission
    
//     // Show the confirmation message
//     document.getElementById('confirmationMessage').classList.remove('hidden');
    
//     // Optionally, clear the form fields or perform additional actions
//     document.getElementById('bookingForm').reset();
// });
document.getElementById('bookingForm').addEventListener('submit', function(event) {
    // Remove or comment out event.preventDefault() if you want to use the default form submission
    // event.preventDefault();

    confirmationMessage.classList.add('show');
    // Optionally, show a confirmation message after form submission
    document.getElementById('confirmationMessage').classList.remove('hidden');
});
