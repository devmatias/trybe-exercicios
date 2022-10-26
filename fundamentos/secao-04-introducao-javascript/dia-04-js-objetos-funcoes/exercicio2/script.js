let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

//   console.log("Bem-vinda", info.personagem)

  info['recorrente'] = 'Sim';
//   console.log(info);

//   for(index in info){
//     console.log(info[index]);
//   }

  let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell’s Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
  }

  for(index in info, info2) {
    let resultado;
    
    if(info[index] === 'Sim' && info2[index] === 'Sim') {
        resultado = "Ambos recorrentes!";
    } else {
        resultado = info[index] + " e " + info2[index];
    }

    // console.log(resultado);
  }
  
  let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

  console.log("O livro favorito de " + leitor.nome + " " + leitor.sobrenome + " se chama '" + leitor.livrosFavoritos[0]['titulo'] + "'")

  leitor.livrosFavoritos[1] = {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
  }

  // console.log(leitor)

  console.log(leitor.nome + " tem " + leitor.livrosFavoritos.length + " livros favoritos")