/*
Crie um array com 5 items (tipos variados).
*/
var arr = ['Soares', false, null, 10, {bola:'Verde'}];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem(arr,arg){
    arr.push(arg);
    console.log(arr);
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
addItem(arr,['teste','pra','cardiaco']);

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log('O segundo elemento do segundo array é '+ arr[5][1]);

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('O primeiro array tem '+ arr.length + ' itens');


/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('O segundo array tem '+ arr[5].length + ' itens');


/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console.log( 'Números pares entre 10 e 20:' );
var cond = 10;
while (cond <= 20) {
    if(cond % 2 == 0){
        console.log(cond);
    }
    cond++;
}

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log( 'Números impares entre 10 e 20:' );
var cond = 10;
while (cond <= 20){
    if (cond % 2 !== 0){
        console.log(cond);
    }
    cond++;
    console.log
}

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log( 'Números pares entre 100 e 120:' );
for(cond = 100; cond <= 120; cond++){
    if (cond % 2 === 0){
        console.log(cond);
    }
}

console.log( 'Números ímpares entre 111 e 125:' );
for(cond = 111; cond <= 125; cond++){
    if (cond % 2 !== 0){
        console.log(cond);
    }
}