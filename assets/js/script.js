document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
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
        console.log(error.status);
        console.log(error.text);
        console.log(error);
    });
}
