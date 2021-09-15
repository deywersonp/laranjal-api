
async function VerificaSeAdmin(req, res, next) {
  const { consultor } = req;

  if (consultor.admin === false) {
    return res.status(400).json({ message: "Apenas user admin pode fazer alterações nas unidades." })
  }

  next();
}

module.exports = VerificaSeAdmin;