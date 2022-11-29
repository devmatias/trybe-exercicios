const createEmail = (fullName) => {
  const lowerCased = fullName.toLowerCase();
  const namePattern = lowerCased.replace(" ", "_");
  return { fullName, email: `${namePattern}@trybe.com` };
};

const newEmployees = (callback) => {
  const employees = {
    id1: callback("Pedro Guerra"), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback("Luiza Drumond"), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback("Carla Paiva"), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  };
  return employees;
};

console.log(newEmployees(createEmail));

const numberChecker = (myNumber, number) => myNumber === number;

const lotteryResult = (myNumber, callback) => {
  const number = Math.floor(Math.random() * 5 + 1);

  return callback(myNumber, number) ? 'Lucky day, you won!' : 'Try Again!';
};

console.log(lotteryResult(2, numberChecker));

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const avaliator = (firstArr, secondArr) => {
    let grade = 0;
    firstArr.forEach((element, index) => {
        if (element === secondArr[index]) {
            grade += 1;
        } else if (secondArr[index] !== 'N.A') {
            grade -= 0.5;
        } 
        console.log(element, secondArr[index], grade)
    });
    return grade;
}

const autoCorrector = (correctAnswers, studentAnswers, comparator) => {
    return `Resultado Final: ${comparator(correctAnswers, studentAnswers)} pontos`;
}

console.log(autoCorrector(RIGHT_ANSWERS, STUDENT_ANSWERS, avaliator))