const frm = document.querySelector("form")
const resp1 = document.querySelector("h2")
const resp2 = document.querySelector("h3")

frm.addEventListener("submit", (e)=>{
    const produto = frm.inProduto.value
    const preco = frm.inPreco.value

    resp1.innerText = `Promoção no Produto: ${produto}`
    resp2.innerText = `Produto com 50% de desconto (para um item) na compra
            de três unidades do produto R$ ${((preco) * 3 - preco / 2).toFixed(2)}`
    
    e.preventDefault()
})