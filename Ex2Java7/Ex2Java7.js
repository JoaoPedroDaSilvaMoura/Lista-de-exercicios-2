document.getElementById('numerosForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const numero1 = parseInt(document.getElementById('numero1').value);
    const numero2 = parseInt(document.getElementById('numero2').value);

    let comparacao;

    if (numero1 > numero2) {
        comparacao = 'O primeiro número é maior que o segundo.';
    } else if (numero1 < numero2) {
        comparacao = 'O primeiro número é menor que o segundo.';
    } else {
        comparacao = 'Os dois números são iguais.';
    }

    document.getElementById('comparacao').textContent = comparacao;

    document.getElementById('resultado').style.display = 'block';
});
