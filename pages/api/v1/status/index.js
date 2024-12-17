import database from "infra/database.js";

async function status(request, response) {
  // console.log("database = ", database);
  const result = await database.query("SELECT 1 + 1 as sum;");
  console.log(result.rows);

  response
    .status(200)
    .json({ chave: "Resultado da chamada da API! Funciona acentos ? áéàèãâ" });
}

export default status;
