const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector('h4')

frm.addEventListener("submit", (e)=>{
    const medicamento = frm.inMedicamento.value
    const preco = frm.inPreco.value

    resp1.innerText = `Promoção de Medicamento R$ ${medicamento}`
    resp2.innerText = `Leve 2 unidades por R$ ${(Math.floor(preco) * 2).toFixed(2)}`
    
    e.preventDefault()
})
