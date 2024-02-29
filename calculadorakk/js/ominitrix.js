var resultado = document.getElementById('resultado')
var resul = document.getElementById('resulconta')
const somaaar = document.getElementById("botao1")
const subtraiir = document.getElementById("botao2")
const multiplicaar = document.getElementById("botao3")
const dividiir = document.getElementById("botao4")

var somar;
var subtrair;

function peganome(){
    var nome = document.getElementById('nome').value
    console.log("Nome: ", nome)
    resultado.innerHTML = "tá na hora de virar heroi!"+ nome
}

function peganum1(){
    var num1 = Number(document.getElementById('num1').value)
    console.log("primeiro numero ", num1) 
}

function peganum2(){
    var num2 = Number(document.getElementById('num2').value)
    console.log("Segundo número numero ", num2) 
}

function soma(){
    var num2 = Number(document.getElementById('num2').value)
    var num1 = Number(document.getElementById('num1').value)
    somar = num1 + num2
    console.log("soma :", somar) 
    resul.innerHTML = somar;
}

somaaar.addEventListener("click", soma)

function subt(){
    var num2 = Number(document.getElementById('num2').value)
    var num1 = Number(document.getElementById('num1').value)
    subtrair = num1 - num2
    console.log("subtração :", subtrair) 
    resul.innerHTML = subtrair;
}

subtraiir.addEventListener("click", subt)
