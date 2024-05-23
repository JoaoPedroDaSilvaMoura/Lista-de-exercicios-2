function calcular() {
    let dolarAtual = parseFloat(document.getElementById('dolar').value);
    
    if (isNaN(dolarAtual) || dolarAtual <= 0) {
        alert('Por favor, insira um valor válido para a cotação do dólar.');
        return;
    }

    let aumento1 = dolarAtual * 1.01;
    let aumento2 = dolarAtual * 1.02;
    let aumento5 = dolarAtual * 1.05;
    let aumento10 = dolarAtual * 1.10;

    document.getElementById('resultado1').textContent = `Se a cotação subir 1%, ficará: R$ ${aumento1.toFixed(2)}`;
    document.getElementById('resultado2').textContent = `Se a cotação subir 2%, ficará: R$ ${aumento2.toFixed(2)}`;
    document.getElementById('resultado5').textContent = `Se a cotação subir 5%, ficará: R$ ${aumento5.toFixed(2)}`;
    document.getElementById('resultado10').textContent = `Se a cotação subir 10%, ficará: R$ ${aumento10.toFixed(2)}`;
}
