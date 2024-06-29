// JavaScript to handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple form validation (you can add more complex validation if needed)
    if (name === '' || email === '' || message === '') {
        alert('Please fill out all fields.');
        return;
    }

    // Display a simple alert (In a real scenario, you would send this data to a server)
    alert(`Thank you, ${name}! Your message has been sent.`);

    // Clear form fields
    document.getElementById('contact-form').reset();
});
