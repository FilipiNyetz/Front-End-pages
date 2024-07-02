const pjBT=document.querySelector('.tperson')

const infos = document.querySelector('.infos');
const nameInput=document.getElementById('name');
const emailInput=document.getElementById('email');
const cpfInput=document.getElementById('cpf');
const foneInput=document.getElementById('fone');

function mudarPJ(){
    console.log("Adicionou")
    infos.classList.add('PJ');
    infos.innerHTML = `
    <input type="text" name="razao_social" id="razao_social" placeholder="Razão Social">
    <input type="text" name="cnpj" id="cnpj" placeholder="CNPJ">
    <input type="text" name="telefone_comercial" id="telefone_comercial" placeholder="Telefone Comercial">
`;
}

function enviar(){
    if(nameInput.value==""||!validarName(nameInput.value)){
        alert("Nome errado");
        return;
    }
    else{
        console.log(nameInput.value);
    }
    if(emailInput.value==""||!validarEmail(emailInput.value)){
        alert("Digita certo");
        return;
    }else{
        console.log(emailInput.value);
    }
    if(cpfInput.value==""||!validarCPF(cpfInput.value)){
        alert("CPF errado");
        return;
    }else{
        console.log(cpfInput.value);
    }
    if(foneInput.value==""||validarNumero(foneInput.value)){
        alert("telefone errado");
        return;
    }else{
        console.log(foneInput.value);
    }
    
};


function validarName(nameInput){
    const nomeRegex = /^(?:\p{Lu}[\p{L}'\s]*(?![0-9]))+(?:\s(?:\p{Lu}[\p{L}'\s]*(?![0-9])){0,1})$/u;
    return nomeRegex.test(nameInput)
}

function validarEmail(emailInput){
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(emailInput);
}

function validarCPF(cpfInput){
    const cpfRegex=/([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/;
    return cpfRegex.test(cpfInput);
}

function validarNumero(foneInput){
    const numeroRegex=/^\([1-9]{2}\) (?:[2-8]|9[0-9])[0-9]{3}\-[0-9]{4}$/;
    return numeroRegex.test(foneInput);
}
