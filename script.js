document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const message = document.getElementById("formMessage");
    message.textContent = "Thank you! Your message has been submitted successfully.";

    this.reset();
});
