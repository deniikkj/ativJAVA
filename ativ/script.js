// // 1.

// let a = parseInt(prompt('Digite o valor de A'))
// let b = parseInt(prompt('Digite o valor de B'))
// let c= parseInt(prompt('Digite o valor de C'))

// let aMaisB = a + b 

// if (aMaisB < c) {
//     console.log('a + b é menor que c')
// } else {
//     console.log('a + b é maior que c')
// }

// // 2.

// function lerDados() {

//     let nome = prompt("Digite o nome da pessoa:");
//     let sexo = prompt("Digite o sexo da pessoa (M ou F):").toUpperCase();
//     let estadoCivil = prompt("Digite o estado civil da pessoa (SOLTEIRO, CASADO, DIVORCIADO, VIÚVO):").toUpperCase();

//     if (sexo === "F" && estadoCivil === "CASADA") {
 
//         let tempoCasada = parseInt(prompt("Digite o tempo de casamento em anos:"));

//         console.log(A pessoa ${nome} é do sexo feminino, casada há ${tempoCasada} anos.);   
        
//     } else {
        
//         console.log(A pessoa ${nome} não se enquadra na condição de sexo feminino e/ou estado civil casada.);
//     }
// }


// lerDados();

// // 3.

// function parOuImpar(numero) {

//   if (numero % 2 === 0) {

//     console.log(${numero} é par.)

//   } else {
    
//     console.log(${numero} é ímpar.);
//   }
// }

// let numero = parseInt(prompt("Digite um número"))

// parOuImpar(numero);

// // 4.

// function resultado(a, b) {
//     let c

//     if (a === b) {
        
//         c = a + b

//     } else {
        
//         c = a * b

//     }

//     console.log(O resultado é: ${c});
// }
//     let valorA = parseInt(prompt("Digite o valor de A:"))
//     let valorB = parseInt(prompt("Digite o valor de B"))

//     resultado(valorA, valorB)

// // 5.

// function dobroOuTriplo(numero) {
    
//     let resultado

//     if (numero > 0) {

//         resultado = numero * 2

//         console.log(O dobro de ${numero} é ${resultado}.)

//     } else if (numero < 0) {

//         resultado = numero * 3
        
//         console.log(O triplo do ${numero} é ${resultado})

//     } else {
//         console.log("O número é zero, sendo assim, não há como multiplicar")
//     }
// }

// let numero = parseInt(prompt("Digite um número"))

// dobroOuTriplo(numero)

// // 6.

// function verificarValoresBooleanos() {

//     let valor1 = prompt("Digite o primeiro valor:");
//     let valor2 = prompt("Digite o segundo valor:");

//     valor1 = (valor1 === 'true');
//     valor2 = (valor2 === 'true');

//     if (valor1 && valor2) {
//         alert("Ambos valores são verdeiros.");

//     } else if (!valor1 && !valor2) {
//         alert("Ambos valores são falsos.");

//     } else {
//         alert("Um dos valores é verdadeiro e o outro é falso");

//     }
// }

// verificarValoresBooleanos();

// // 7.

// function somaCondicional(){

//     let numero = parseInt(prompt("Digite um número:"))

//     if (numero % 2 === 0) {
//         let resultado = numero + 5

//         alert(`O número ${numero} é par. Adicionando 5 da igual à ${resultado}.`)

//     } else {
//         let resultado = numero + 8

//         alert(`O número ${numero} é impar. Adicionando 8 da igual à ${resultado}.`)

//     }
// }

//     somaCondicional()

// // 8.

// function ordemDecrescente() {

//     let numero1 = parseInt(prompt("Digite o primeiro número:"))

//     let numero2 = parseInt(prompt("Digite o segundo número:"))

//     let numero3 = parseInt(prompt("Digite o terceiro número:"))

//     let primeiro, segundo, terceiro;

//     if (numero1 > numero2 && numero1 > numero3) {
//         primeiro = numero1
        
//         if (numero2 > numero3) {
//             segundo = numero2
//             terceiro = numero3

//         } else {
//             segundo = numero3
//             terceiro = numero2
//         }

//     } else if (numero2 > numero1 && numero2 > numero3) {
//         primeiro = numero2

//         if (numero1 > numero3) {
//             segundo = numero1
//             terceiro = numero3

//         } else {
//             segundo = numero3
//             terceiro = numero1
//         }
        
//     } else {
//         primeiro = numero3

//         if (numero1 > numero2) {
//             segundo = numero1
//             terceiro = numero2

//         } else {
//             segundo = numero2
//             terceiro = numero1
//         }
//     }

//     alert(`Números em ordem decrescente: ${primeiro}, ${segundo}, ${terceiro}`)
// }

// ordemDecrescente()

// // 9.

// function calcularPeso() {

//     let altura = parseFloat(prompt("Digite a altura (em metros):"))

//     let sexo = prompt("Digite o sexo (M ou F):").toUpperCase()

//     let pesoIdeal;

//     if (sexo === 'M') {
//         pesoIdeal = (72.7 * altura) - 58
//         alert(`O peso ideal para um homem com altura ${altura.toFixed(2)} m é ${pesoIdeal.toFixed(2)} kg.`)

//     } else if (sexo === 'F') {
//         pesoIdeal = (62.1 * altura) - 44.7
//         alert(`O peso ideal para uma mulher com altura ${altura.toFixed(2)} m é ${pesoIdeal.toFixed(2)} kg.`)

//     } else {
//         alert("Sexo inválido. Por favor, digite 'M' para masculino ou 'F' para feminino.")

//     }
// }

// calcularPeso();

// // 10. 

// function calcularIMC() {

//     let peso = parseFloat(prompt("Digite o peso (em kg):"))

//     let altura = parseFloat(prompt("Digite a altura (em metros):"))

//     let imc = peso / (altura * altura)

//     let condicao
//     if (imc < 18.5) {
//         condicao = "Abaixo do peso."

//     } else if (imc >= 18.5 && imc < 25) {
//         condicao = "Peso normal."

//     } else if (imc >= 25 && imc < 30) {
//         condicao = "Acima do peso."

//     } else {
//         condicao = "Obeso"
//     }

//     alert(`IMC calculado: ${imc.toFixed(2)} - Condição: ${condicao}`)
// }

// calcularIMC();

// 11.

function calcularPrecoFinal(precoEtiqueta, codigoCondicao) {
    let precoFinal = 0

    switch (codigoCondicao) {
        case 1:
            precoFinal = precoEtiqueta * 0.9 
            break
        case 2:
            precoFinal = precoEtiqueta * 0.85 
            break
        case 3:
            precoFinal = precoEtiqueta
            break
        case 4:
            precoFinal = precoEtiqueta * 1.1 
            break
        default:
            console.log("Código de condição de pagamento inválido.")
            return null
    }

    return precoFinal.toFixed(2) 
}

let precoEtiqueta = parseFloat(prompt("Digite o preço normal do produto:"))


let codigoCondicao = parseInt(prompt(`Escolha a condição de pagamento:
1 - À vista em dinheiro ou cheque (10% de desconto)
2 - À vista no cartão de crédito (15% de desconto)
3 - Em duas vezes sem juros
4 - Em duas vezes com juros de 10%
Digite o código da condição:`))

let precoFinal = calcularPrecoFinal(precoEtiqueta, codigoCondicao)

if (precoFinal !== null) {
    console.log(`O preço a ser pago é R$ ${precoFinal}`)

}
