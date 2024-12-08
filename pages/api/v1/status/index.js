function status(request, response) {
  response
    .status(200)
    .json({ chave: "Resultado da chamada da API! Funciona acentos ? áéàèãâ" });
}

export default status;
