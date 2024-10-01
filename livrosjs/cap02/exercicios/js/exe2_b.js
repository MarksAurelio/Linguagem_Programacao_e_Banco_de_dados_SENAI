const frm = document.querySelector("form")
const resp1 = document.querySelector("h2")

frm.addEventListener("submit", (e)=>{
  
    const tempo = frm.inTempo.value
    const valor = frm.inValor.value
  
    const total = Number((valor * Math.ceil(tempo / 15)))
  
    resp1.innerText = `O valor total a ser pago é R$ ${total.toFixed(2)}`
    e.preventDefault()
})
