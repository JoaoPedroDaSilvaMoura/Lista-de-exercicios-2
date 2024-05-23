document.getElementById('numeroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const numero = parseInt(document.getElementById('numero').value);

    let parOuImpar;

    if (numero % 2 === 0) {
        parOuImpar = 'O número é par.';
    } else {
        parOuImpar = 'O número é ímpar.';
    }

    document.getElementById('parOuImpar').textContent = parOuImpar;

    document.getElementById('resultado').style.display = 'block';
});
