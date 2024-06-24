function calcular() {
    const base = parseFloat(document.getElementById('base').value);
    const altura = parseFloat(document.getElementById('altura').value);
  
    if (base <= 0 || altura <= 0) {
      alert("Error: Ingrese valores positivos para la base y la altura");
      return;
    }
  
    const area = base * altura;
    const perimetro = 2 * (base + altura);
  
    document.getElementById('area').textContent = `Área: ${area} unidades cuadradas`;
    document.getElementById('perimetro').textContent = `Perímetro: ${perimetro} unidades`;
  }
  