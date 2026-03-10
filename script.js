function calcularIMC() {
  let peso = parseFloat(document.getElementById("peso").value);
  let altura = parseFloat(document.getElementById("altura").value);

  if (isNaN(peso) || isNaN(altura) || altura <= 0) {
    document.getElementById("resultadoIMC").textContent = "Por favor, insira valores válidos.";
    document.getElementById("classificacao").textContent = "";
    return;
  }

  let imc = peso / (altura * altura);
  let classificacao = "";

  if (imc < 18.5) {
    classificacao = "Abaixo do peso";
  } else if (imc < 25) {
    classificacao = "Peso normal";
  } else if (imc < 30) {
    classificacao = "Sobrepeso";
  } else if (imc < 35) {
    classificacao = "Obesidade grau 1";
  } else if (imc < 40) {
    classificacao = "Obesidade grau 2";
  } else {
    classificacao = "Obesidade grau 3";
  }

  document.getElementById("resultadoIMC").textContent = "Seu IMC é: " + imc.toFixed(2);
  document.getElementById("classificacao").textContent = "Classificação: " + classificacao;
}