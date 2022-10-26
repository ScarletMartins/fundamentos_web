let nome = document.querySelector('#nome')
let email = document.querySelector('#email')
let telefone = document.querySelector('#telefone')
let mensagem = document.querySelector('#mensagem')
let nomeOk = false
let emailOk = false
let telefoneOk = false
let mensagemOk = false
let mapa = document.querySelector('#mapa')

nome.style.width = '100%'
email.style.width = '100%'
telefone.style.width = '100%'
mensagem.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length < 2){
        txtNome.innerHTML = 'Nome inválido'
        txtNome.style.color = '#e76f51'
    } else {
        txtNome.innerHTML = 'Nome válido'
        txtNome.style.color = '#2a9d8f'
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = '#e76f51'
    } else {
        txtEmail.innerHTML = 'E-mail válido'
        txtEmail.style.color = '#2a9d8f'
        emailOk = true
    }
}

function validaTelefone() {
    let txtTelefone = document.querySelector('#txtTelefone')
    if(telefone.value.length != 11){
        txtTelefone.innerHTML = 'Telefone inválido, insira 11 caracteres'
        txtTelefone.style.color = '#e76f51'
    } else {
        txtTelefone.innerHTML = 'Telefone válido'
        txtTelefone.style.color = '#2a9d8f'
        telefoneOk = true
    }
}

function validaMensagem() {
    let txtMensagem = document.querySelector('#txtMensagem')
    if(mensagem.value.length >= 100) {
        txtMensagem.innerHTML = 'Texto maior que o permitido. Máximo de 100 caracteres'
        txtMensagem.style.color = '#e76f51'
        txtMensagem.style.display = 'block'
    } else {
        txtMensagem.style.display = 'none'
        mensagemOk = true
    }
}

function enviar() {
    if(nomeOk == true && emailOk == true && telefoneOk == true && mensagemOk ==true){
        alert('Formulário enviado com sucesso!')
    }else {
        alert('Preencha o formulário corretamente')
    }
}

function mapaZoom(){
    mapa.style.width = '800px'
    mapa.style.heigth = '800px'
}

function mapaNormal(){
    mapa.style.width = '500px'
    mapa.style.heigth = '350px'
}