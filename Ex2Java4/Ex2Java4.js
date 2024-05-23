document.getElementById('pedidoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const sabor1 = document.getElementById('sabor1').value;
    const sabor2 = document.getElementById('sabor2').value;
    const sabor3 = document.getElementById('sabor3').value;
    const sabor4 = document.getElementById('sabor4').value;
    const refrigerante = parseInt(document.getElementById('refrigerante').value);

    const precoPizza = 12; // Preço de cada sabor de pizza
    const precoRefrigerante = 7; // Preço de cada refrigerante

    const totalPizza = precoPizza * 4; // 4 sabores de pizza
    const totalRefrigerante = precoRefrigerante * refrigerante;

    const totalPedido = totalPizza + totalRefrigerante;

    const saboresEscolhidos = `Sabores de pizza escolhidos: ${sabor1}, ${sabor2}, ${sabor3}, ${sabor4}`;
    const totalPagar = `Total a pagar: R$ ${totalPedido.toFixed(2)}`;

    document.getElementById('sabores').textContent = saboresEscolhidos;
    document.getElementById('total').textContent = totalPagar;

    document.getElementById('resultado').style.display = 'block';
});
