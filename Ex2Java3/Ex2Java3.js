document.getElementById('operacoesForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const numero1 = parseInt(document.getElementById('numero1').value);
    const numero2 = parseInt(document.getElementById('numero2').value);

    if (isNaN(numero1) || isNaN(numero2)) {
        alert('Por favor, insira dois números inteiros válidos.');
        return;
    }

    document.getElementById('soma').textContent = `Soma: ${numero1 + numero2}`;
    document.getElementById('subtracao').textContent = `Subtração: ${numero1 - numero2}`;
    document.getElementById('multiplicacao').textContent = `Multiplicação: ${numero1 * numero2}`;
    
    if (numero2 !== 0) {
        document.getElementById('divisao').textContent = `Divisão: ${numero1 / numero2}`;
    } else {
        document.getElementById('divisao').textContent = `Divisão: Não é possível dividir por zero.`;
    }

    document.getElementById('resultado').style.display = 'block';
});
