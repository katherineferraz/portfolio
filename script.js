const botaoTema = document.getElementById('botao-tema');

botaoTema.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        botaoTema.textContent = "Mudar para Modo Claro";
    } else {
        botaoTema.textContent = "Mudar para Modo Escuro";
    }
});


function validarFormulario(event) {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    const msg = document.getElementById('mensagem').value;

    // verificação para garantir que nenhum campo obrigatório esteja vazio
    if (nome == "" || email == "" || msg == "") {
        alert("Por favor, preencha todos os campos do formulário!");
        event.preventDefault(); // Impede o envio se houver erro
        return false;
    }

    // validação de e-mail simples: verifica a existência de '@' e '.'
    if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
        alert("O formato do e-mail parece incorreto. Por favor, revise.");
        event.preventDefault();
        return false;
    }

    // se as validações passarem, exibe alerta de sucesso (Requisito 5.2)
    alert("Obrigado pelo contato, Katherine recebeu sua mensagem com sucesso!");
    
    // limpa os campos após o alerta de confirmação
    document.getElementById('formContato').reset();
}

// validação ao evento de submissão do formulário
document.getElementById('formContato').onsubmit = validarFormulario;
