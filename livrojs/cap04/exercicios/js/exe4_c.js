const frm = document.querySelector('form')
const resp1 = document.querySelector('h3')
const resp2 = document.querySelector('h4')

frm.addEventListener("submit", (e)=>{
    e.preventDefault()
    const valor = Number(frm.inValor.value)


    if(valor > 1 && valor < 1.75){
        alert(`Tempo: 30 min \n ${troco = valor - 1}`)
    }
    else if(valor > 1.75 && valor < 3){
        alert(`Tempo: 60 min `)
    }
    else if(valor >= 3){
        alert(`Tempo: 120 min `)
    }
    else{
        alert("Tempo insuficiente!")
    }
})