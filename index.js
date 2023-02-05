//Questão 1//
function quest1() {
    let elementos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  
    for (let index = 0; index < elementos.length; index++) {
      const num = elementos[index];
      if (num % 2 === 0) {
        console.log(`O número: ${num} é par`);
      }
    }
  }

  //Questão 2//
  function quest2() {
    const array = [  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,];
    let soma = 0;

    for (let i = 0; i < array.length; i++) {
    soma += array[i];
    }
console.log(soma);
}

//Questão 3//
function quest3() {
    let vetor = [];
    for (i = 1; vetor.length < 4; i++ ) {
        let soma = 0;
        for (cont = 1; cont < i; cont++) {
            if (i % cont === 0) {
                soma += cont
            }   
        }
        if (soma === i) {
            vetor.push(i);
        }
    };
    console.log(vetor);
};

//Questão 4//

function quest4() {
  let vetor1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let vetor2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  function unirArrays(v1, v2) {
    let uniao = [v1 + "," + v2];
    return uniao;
  }

  console.log(unirArrays(vetor1, vetor2));
}

//Queestão 5//
function quest5(){
        let vetInteiros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      
        function isInArray(arr, n) {
          if (arr.indexOf(n) !== -1) {
            return true;
          } else {
            return false;
          }
        }
      
        console.log(isInArray(vetInteiros, 11));
}

  

//questão 6//
 function quest6() {
    let nomes = [];
    do {
      let nome = prompt("Digite um nome:");
      nomes.push(nome);
    } while (nomes.length < 5);
  
    console.log("Entrada: ", nomes);
    console.log("Saída: ", nomes.reverse());
}