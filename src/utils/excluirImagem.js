const supabase = require("../supabase");

async function excluirImagem( nomeDoCaminho ) {
  const { error } = await supabase.storage
    .from(process.env.SUPABASE_BUCKET)
    .remove([nomeDoCaminho]);

    if (error) {
      return "Erro ao excluir a imagem.";
    }
}

module.exports = excluirImagem;