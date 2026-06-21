function sendMail(){
  let parms = {
    name : document.getElementById("name").value, 
    email : document.getElementById("email").value, 
    message : document.getElementById("message").value, 
  }

  emailjs.send("service_wl5a0ak","template_9exyt7s",parms).then(alert("Email Sent!"))
}
