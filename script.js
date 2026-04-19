// função para validar o formulário de contato
function validarFormulario(event) {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    const msg = document.getElementById('mensagem').value;

    // para verificar se os campos estão vazios
    if (nome == "" || email == "" || msg == "") {
        alert("Por favor, preencha tudo!");
        event.preventDefault(); 
        return false;
    }

    // validação de email simples
    if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
        alert("E-mail parece errado. Digite um válido.");
        event.preventDefault();
        return false;
    }

    // requisito 5.2
    alert("Mensagem enviada com sucesso!");
    // O reset limpa os campos conforme solicitado
    document.getElementById('formContato').reset();
}

// vinculando a função ao formulari
document.getElementById('formContato').onsubmit = validarFormulario;