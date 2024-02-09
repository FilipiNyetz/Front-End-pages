function validarEmail(email) {
    // Regular expression for a basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function salvar() {
    // Get the email input element
    const emailInput = document.getElementById("email");

    // Get the email value
    const emailValue = emailInput.value.trim();
    console.log(validarEmail(emailValue))
    // Validate the email
    if (validarEmail(emailValue)) {
       
        // You can add further logic here, such as sending the email to a server.
    } else {
        alert("Por favor insira um endereço de e-mail válido.");
    }
    
}




  
  

