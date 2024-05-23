document.getElementById('vendasForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const valorVendido = parseFloat(document.getElementById('valorVendido').value);
    const meta = parseFloat(document.getElementById('meta').value);
    const metaMinima = parseFloat(document.getElementById('metaMinima').value);

    if (isNaN(valorVendido) || isNaN(meta) || isNaN(metaMinima) || valorVendido < 0 || meta < 0 || metaMinima < 0) {
        alert('Por favor, insira valores válidos.');
        return;
    }

    const percentualMeta = (valorVendido / meta) * 100;
    const percentualMetaMinima = (valorVendido / metaMinima) * 100;

    let mensagemAtingiuMeta;

    if (valorVendido >= meta) {
        mensagemAtingiuMeta = 'Atingiu a meta de vendas.';
    } else if (valorVendido >= metaMinima) {
        mensagemAtingiuMeta = 'Atingiu a meta mínima de vendas.';
    } else {
        mensagemAtingiuMeta = 'Não atingiu nenhuma das metas.';
    }

    const mensagemPercentualMeta = `Percentual de atingimento da meta: ${percentualMeta.toFixed(2)}%`;
    const mensagemPercentualMetaMinima = `Percentual de atingimento da meta mínima: ${percentualMetaMinima.toFixed(2)}%`;

    document.getElementById('atingiuMeta').textContent = mensagemAtingiuMeta;
    document.getElementById('percentualMeta').textContent = mensagemPercentualMeta;
    document.getElementById('percentualMetaMinima').textContent = mensagemPercentualMetaMinima;

    document.getElementById('resultado').style.display = 'block';
});
