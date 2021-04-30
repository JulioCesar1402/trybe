// const repeat = (number, action) => {
//   for (let count = 0; count <= number; count += 1) {
//     action(count);
//   }
// };

// repeat(5, console.log);


// const repeat = (number, action) => {
//   for (let count = 0; count <= number; count += 1) {
//     action(count);
//   }
// };

// repeat(3, (number) => {
//   if (number % 2 === 0) {
//     console.log(number, 'is even');
//   }
// });

// const repeat = (number, action) => {
//   for (let count = 0; count <= number; count += 1) {
//     action(count);
//   }
// };

// const isEven = (number) => {
//   if (number % 2 === 0) {
//     console.log(number, 'is even');
//   }
// };

// const isOdd = (number) => {
//   if ((number % 2) > 0) {
//     console.log(number, 'is odd');
//   }
// };

// repeat(3, isEven); // Testa quais números serão pares;
// repeat(3, isOdd); // Testa quais números serão ímpares;


// Crie uma função de primeira classe que tenha o retorno console.log('Acordando!!') ;
const wakeUp = () => {
  console.log('Acordando!!')
}

// const repeat = (number, func) => {
//   for(let count = 0; count < number; count += 1){
//     func();
//   }
// }


// Crie outra função de primeira classe que tenha o retorno console.log('Bora tomar café!!') ;
const timeToDrinkCoffee = () => {
  console.log('Bora tomar café!!')
}

const repeat = (number, func) => {
  for(let count = 0; count < number; count += 1){
    func()
  }
}

// Crie mais uma função de primeira classe que tenha o retorno console.log('Partiu dormir!!') ;
const goodNight = () => {
  console.log('Partiu dormir!!')
}

const time = (hour, func) => {
  if ((hour === '22h00')){
    func();
  }
}

// Desenvolva uma HOF chamada doingThings e configure esta função para que retorne a execução das funções de primeira classe que você criou nos exemplos anteriores. Exemplo:
const doingThings = (inputText) => {
  if((inputText === wakeUp)) repeat(3, inputText);
  if((inputText === goodNight)) time('22h00', inputText);
  if((inputText === timeToDrinkCoffee)) repeat(4, inputText);
}

doingThings(wakeUp);
doingThings(timeToDrinkCoffee);
doingThings(goodNight);