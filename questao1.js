function tiposTriangulo() {
    lado1 = Number(document.getElementById("l1").value);
    lado2 = Number(document.getElementById("l2").value);
    lado3 = Number(document.getElementById("l3").value);

    if (lado1 === lado2 && lado2 === lado3) {
      alert("Triângulo equilátero!");
    } else if (lado1 === lado2 || lado1 === lado3 || lado3 === lado2) {
      alert("Triângulo isósceles!");
    } else {
      alert("Triângulo escaleno!");
    }
  }
