let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let waitingNumber = 0;

// for(let firstIndex = 0; firstIndex < numbers.length; firstIndex++) {
//     for(let secondIndex = 1; secondIndex < numbers.length; secondIndex++){
//         if(numbers[secondIndex - 1] > numbers[secondIndex]) {
//             waitingNumber = numbers[secondIndex - 1];
//             numbers[secondIndex - 1] = numbers[secondIndex];
//             numbers[secondIndex] = waitingNumber;
//         }
//     }

// }


 for(let index = 0; index < numbers.length; index++) {
    if(numbers[index + 1] !== undefined) {
        numbers[index] = numbers[index] * numbers[index + 1];
    } else {
        numbers[index] = numbers[index] * 2;
    }
    

}

console.log(numbers);
