function validarAtualizacaoConsultor(
    apelido,
    senha
) {
    if (apelido) {
        if (typeof apelido !== "string") {
            return "O apelido deve ser preenchido com um texto.";
        }
    }

    if (senha) {
        if (typeof senha !== "string") {
            return "A senha deve ser preenchida com um texto.";
        }

        if (senha.length < 6) {
            return "A senha deve conter, no mínimo, 6 caracteres.";
        }
    }
}

module.exports = validarAtualizacaoConsultor;