/* 
// ---- Exercício 1 ----

var numero1 = parseInt(prompt("Digite um número: "));
var numero2 = parseInt(prompt("Digite outro número: "));
    if (numero1 > numero2) {
        document.write("O número 1 é maior. ");
    }else if (numero2 > numero1) { 
        document.write("O número 2 é maior ");
    } else {
        document.write("Os números são iguais. ");
    }

*/ 

/*
// ---- Exercício 2 ---- 

var numero = parseFloat(prompt("Digite um número para verificar se é positivo ou negativo. "))
    if (numero >= 0) {
        document.write("O número é positivo")
    } else {
        document.write("O número é negativo.")
    }

*/

// ---- Exercício 3  ---- 
/*

var num1 = parseInt(prompt("Digite um número: "))
var num2 = parseInt(prompt("Digite um segundo número: "))
var num3 = parseInt(prompt("Digite um terceiro número: "))
    if (num1 > num2) {
        document.write("O primeiro número é o maior")
    }
    else if (num1 > num3) {
        document.write("O primeiro número é maior")
    }
    else if (num2 > num3) {
        document.write("O segundo número é maior")
    }

    else {
        document.write("O terceiro número é o maior")
    }

*/

// ---- Exercício 4  ---- 
/*
var numero1 = parseInt(prompt("Informe o primeiro valor: "));
var numero2 = parseInt(prompt("Informe o segundo valor: "));
var numero3 = parseInt(prompt("Informe o terceiro valor: "));
var maior = 0;
var segundo = 0;
    if (numero1 > numero2 && numero1 > numero3) {
        maior = numero1;
            if (numero2 > numero3) {
                segundo = numero2;
            } else {
                segundo = numero3;
            }

    };
    if (numero2 > numero1 && numero2 > numero3) {
        maior = numero2;
            if (numero3 > numero1) {
                segundo = numero3
            } else {
                segundo = numero1
            }

    };
    if (numero3 > numero1 && numero3 > numero2) {
        maior = numero3;
            if (numero2 > numero1) {
                segundo = numero2
            } else {
                segundo = numero1
            }

    }

var soma = maior + segundo;
document.write("A soma entre os dois maiores é: " + soma)
*/

// ---- Exercício 5  ---- 
/*
    var num1 = parseInt(prompt("Digite o primeiro número ")); 
    var num2 = parseInt(prompt("Digite o segundo número ")); 
    var num3 = parseInt(prompt("Digite o terceiro número ")); 
    var num4 = parseInt(prompt("Digite o quarto número ")); 
    var num5 = parseInt(prompt("Digite o quinto número ")); 
    var num6 = parseInt(prompt("Digite o sexto número ")); 

    media = ((num1 + num2 + num3 + num4 + num5 + num6) / 6);
    document.write("A média desses números é " , media);
*/

// ---- Exercício 6  ---- 