let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false


nome.style.width = '100%'
email.style.width = '100%'
assunto.style.width = '80%'

function validaNome(){
    let txt = document.querySelector('#txtNome')
    if(nome.value.length < 3 ){
       txt.innerHTML = 'Nome inválido'
        txt.style.color = 'red'
    }else{
        txt.innerHTML = 'Nome Válido'
        txt.style.color = 'green'
        nomeOk = true
    }
}

function validaEmail(){
let txt2 = document.querySelector('#txtEmail')
    if (email.value.indexOf('@')== -1 || email.value.indexOf('.') == -1){
        txt2.innerHTML = 'E-mail Inválido'
        txt2.style.color = 'red'
    }else {
        txt2.innerHTML = 'E-mail Válido'
        txt2.style.color = 'green'
        emailOk = true
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')

    if (assunto.value.length >= 100){
        txtAssunto.innerHTML = 'Texto muito grande, digite no máximo 100 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    }else{
        txtAssunto.style.display = 'none' 
        assuntoOk = true
    }
}
    
function enviar() {

        if(nomeOk == true && emailOk == true && assuntoOk == true){
            
            alert('Formulario enviado com sucesso!')
        }else{
            alert ('Preencha o formulário corretamente! ')
        }

    }

    

