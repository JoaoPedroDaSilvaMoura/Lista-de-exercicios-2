document.getElementById('turmasForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const totalAlunos = parseInt(document.getElementById('alunos').value);
    const totalTurmas = parseInt(document.getElementById('turmas').value);

    if (isNaN(totalAlunos) || isNaN(totalTurmas) || totalAlunos < 0 || totalTurmas < 1) {
        alert('Por favor, insira valores válidos.');
        return;
    }

    const alunosPorTurma = Math.floor(totalAlunos / totalTurmas);
    const alunosRestantes = totalAlunos % totalTurmas;

    const mensagemAlunosPorTurma = `Quantidade de alunos por turma: ${alunosPorTurma}`;
    const mensagemAlunosSemTurma = `Quantidade de alunos sem turma: ${alunosRestantes}`;

    document.getElementById('alunosPorTurma').textContent = mensagemAlunosPorTurma;
    document.getElementById('alunosSemTurma').textContent = mensagemAlunosSemTurma;

    document.getElementById('resultado').style.display = 'block';
});
