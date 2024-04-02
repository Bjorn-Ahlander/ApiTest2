document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    var formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value
    };

    // Example of processing form data on the client-side
    // You can replace this with your desired logic
    var responseMessage = `Formuläret har skickats med namn: ${formData.name} och e-post: ${formData.email}`;
    var confirmationMessage = "Din information är mottagen";

    // Display response message
    document.getElementById('response').innerText = responseMessage;

    // Display confirmation message after a short delay
    setTimeout(function() {
        document.getElementById('response').innerText = confirmationMessage;
    }, 2000); // Display confirmation message for 2 seconds (2000 milliseconds)
});






