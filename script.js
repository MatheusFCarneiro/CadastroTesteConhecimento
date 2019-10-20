$('#confirm_password').change(function() {
    let senha = $('#password').val();
    let confirmaSenha = $(this).val();

    if (senha == confirmaSenha) {
        alert('Senha está Correta!')
    } else {
        alert('Senha está Diferente!')
    }

});

function confirmacao() {
    $.notify({

        message: 'Cadastro Concluido com Sucesso!'
    }, {
        type: 'success'
    });
    return false
}
