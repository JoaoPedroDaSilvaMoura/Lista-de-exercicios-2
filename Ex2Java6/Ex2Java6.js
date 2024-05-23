document.getElementById('notaForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nota = parseFloat(document.getElementById('nota').value);

    if (isNaN(nota) || nota < 0 || nota > 10) {
        alert('Por favor, insira uma nota válida entre 0 e 10.');
        return;
    }

    let mensagem;

    if (nota > 6) {
        mensagem = 'Aprovado';
    } else if (nota > 4) {
        mensagem = 'Precisa fazer prova substitutiva';
    } else {
        mensagem = 'Reprovado';
    }

    document.getElementById('mensagem').textContent = mensagem;

    document.getElementById('resultado').style.display = 'block';
});
