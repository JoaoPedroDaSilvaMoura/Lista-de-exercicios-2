document.getElementById('omeleteForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const numPessoas = parseInt(document.getElementById('numPessoas').value);

    if (numPessoas <= 0 || isNaN(numPessoas)) {
        alert('Por favor, insira um número válido de pessoas.');
        return;
    }

    const ovosTotal = numPessoas * 2;
    const queijoTotal = numPessoas * 50;

    document.getElementById('ovos').textContent = `Ovos necessários: ${ovosTotal} unidades`;
    document.getElementById('queijo').textContent = `Queijo necessários: ${queijoTotal} gramas`;

    document.getElementById('resultado').style.display = 'block';
});
