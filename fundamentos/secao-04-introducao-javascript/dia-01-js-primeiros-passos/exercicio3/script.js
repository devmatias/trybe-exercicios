const grade = -30;

if(grade >= 80 && grade <= 100) {
    console.log("Parabéns, você foi aprovado!");
} else if(grade < 80 && grade >= 60){
    console.log("Você está na nossa lista de espera!");
} else if(grade < 60 && grade >=  0){
    console.log("Você foi reprovado!");
} else {
    console.log("Erro ao verificar nota!");
}