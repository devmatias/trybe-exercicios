let status = "aprovada";

switch (status) {
  case "aprovada":
    console.log("Parabéns, você foi aprovado!");
    break;
  case "lista":
    console.log("Você está na nossa lista de espera");
    break;
  case "reprovada":
    console.log("Você foi reprovada(o)");
    break;
  default:
    console.log("Informação incorreta!");
}