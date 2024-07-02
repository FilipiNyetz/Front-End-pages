const form=document.querySelector('#form')
const sendBT=document.querySelector('.send-bt');
const email=document.querySelector('#email');
const msg=document.querySelector('.alert-msg')

function send(){
   if(email.value===""||!validarEmail(email.value)){
    msg.innerHTML="Please provid a valid email "
    email.classList.add('active');
   }
   else {
    msg.innerHTML = ""; 
    email.classList.remove('active');
    
}
}

function validarEmail(email){
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
    
}