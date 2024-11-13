// Wait for the document to fully load
document.addEventListener('DOMContentLoaded', function() {
    const nameInput = document.querySelector('.name-input input');
    const welcomeMessage = document.createElement('p');
    
    // Set welcome message class and style
    welcomeMessage.className = 'welcome-message';
    welcomeMessage.style.display = 'none';
    nameInput.parentNode.insertBefore(welcomeMessage, nameInput.nextSibling);

    // Function to handle the Enter key event in the name input field
    function handleNameSubmit(event) {
        // Check if Enter key is pressed
        if (event.key === 'Enter') {
            const name = nameInput.value.trim();
            if (name) {
                welcomeMessage.textContent = `Hello, ${name}!`;
                welcomeMessage.style.display = 'block'; // Show welcome message
                nameInput.style.display = 'none'; // Hide input field
            }
        }
    }

    // Add event listener for Enter key
    nameInput.addEventListener('keypress', handleNameSubmit);
});
