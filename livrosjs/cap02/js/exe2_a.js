frm.addEventListener("submit", (e)=> {
    const medicamento = document.getElementById('inMedicamento').value
    const preco = parseFloat(document.getElementById('inPreco').value)

    const valorTotal = preco * 2
    const valorFinal = Math.floor(valorTotal)

    const resultado = document.getElementById('resultado');
    resultado.textContent = `O valor final de 2 unidades de ${descricao} na promoção é R$ ${valorFinal}.00`;

    e.preventDefault()
})
