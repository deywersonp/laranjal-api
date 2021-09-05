function validarAtualizacaoConsultor(
    nome_social,
    senha
) {
    if (nome_social) {
        if (typeof nome_social !== "string") {
            return "O nome social deve ser preenchido com um texto.";
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