document.getElementById('pessoasForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome1 = document.getElementById('nome1').value;
    const anoNascimento1 = parseInt(document.getElementById('anoNascimento1').value);
    const nome2 = document.getElementById('nome2').value;
    const anoNascimento2 = parseInt(document.getElementById('anoNascimento2').value);
    const nome3 = document.getElementById('nome3').value;
    const anoNascimento3 = parseInt(document.getElementById('anoNascimento3').value);

    const anoAtual = new Date().getFullYear();

    const idade1 = anoAtual - anoNascimento1;
    const idade2 = anoAtual - anoNascimento2;
    const idade3 = anoAtual - anoNascimento3;

    const pessoas = [
        { nome: nome1, idade: idade1 },
        { nome: nome2, idade: idade2 },
        { nome: nome3, idade: idade3 }
    ];

    pessoas.sort((a, b) => b.idade - a.idade);

    const maisVelha = `Pessoa mais velha: ${pessoas[0].nome} - ${pessoas[0].idade} anos`;
    const segundaMaisVelha = `Segunda pessoa mais velha: ${pessoas[1].nome} - ${pessoas[1].idade} anos`;
    const maisNova = `Pessoa mais nova: ${pessoas[2].nome} - ${pessoas[2].idade} anos`;

    document.getElementById('maisVelha').textContent = maisVelha;
    document.getElementById('segundaMaisVelha').textContent = segundaMaisVelha;
    document.getElementById('maisNova').textContent = maisNova;

    document.getElementById('resultado').style.display = 'block';
});
