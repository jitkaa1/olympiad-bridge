document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    sendMail();
});

function sendMail() {
    const params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    emailjs.send(
        "service_wl5a0ak",
        "template_9exyt7s",
        params
    )
    .then(function(response) {
        console.log(response);
        alert("Email Sent!");
    })
    .catch(function(error) {
        console.error(error);
        alert("Failed to send email.");
    });
}
