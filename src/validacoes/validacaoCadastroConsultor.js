function validarCadastro(
    apelido,
    email,
    senha
 ) {
     if (!apelido) {
         return "O preenchimento do apelido é obrigatório.";
     }

     if (!apelido.trim()) {
        return "O preenchimento do apelido é obrigatório.";
     }

     if (typeof apelido !== "string") {
        return "O apelido deve ser preenchido com um texto.";
     }

     if (apelido.length > 100) {
        return "O nome deve conter, no máximo, 100 caracteres.";
     }

     if (!email) {
         return "O e-mail deve ser preenchido.";
     }

     if (!email.trim()) {
         return "O e-mail deve ser preenchido.";
     }
     
     if (typeof email !== "string") {
         return "O e-mail deve ser preenchido com um texto.";
     }
    
     if (email.length > 100) {
         return "O e-mail deve conter, no máximo, 100 caracteres.";
     }

     if (!email.includes("@")) {
         return "Formato de e-mail inválido.";
     }

     const indice = email.indexOf("@");
     if (!email.includes(".", indice)) {
         return "Formato de e-mail inválido.";
     }
     if (!email.includes("fcamara", indice)) {
         return "O e-mail informado parece não fazer parte do padrão FCamara. Por favor, insira um e-mail válido.";
     }

     if (!senha) {
         return "O preenchimento da senha é obrigatório.";
     }

     if (!senha.trim()) {
         return "O preenchimento da senha é obrigatório.";
     }
     
     if (typeof senha !== "string") {
         return "A senha deve ser preenchida com um texto.";
     }

     if (senha.length < 6) {
         return "A senha deve conter, no mínimo, 6 caracteres.";
     }

     if (senha.length > 100) {
         return "A senha deve conter, no máximo, 100 caracteres.";
     }
 }

module.exports = validarCadastro;