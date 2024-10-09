const frm = document.querySelector('form')
const resp1 = document.querySelector('h3')
const resp2 = document.querySelector('h4')

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const ladoA = Number(frm.inLadoA.value)
    const ladoB = Number(frm.inLadoB.value)
    const ladoC = Number(frm.inLadoC.value)

    if (ladoA > (ladoB + ladoC) || ladoB > (ladoA + ladoC) || ladoC > (ladoA + ladoB)) {
        alert('Não pode forma um triângulo')
    }
    if (ladoA === ladoB && ladoA === ladoC) {
        alert(`Lados podem formar um triângulo \nTipo: Equilátero`)
    }
    else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        alert(`Lados podem formar um triângulo \nTipo: Isósceles`)
    }
    else {
        alert(`Lados podem formar um triângulo \nTipo: Escaleno`)
    }
})
