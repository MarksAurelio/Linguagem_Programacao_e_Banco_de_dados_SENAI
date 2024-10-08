const frm = document.querySelector('form')
const resp = document.querySelector('h3')

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const velocidadePermitida = Number(frm.inVelocidadePermitida.value)
    const velocidadeCondutor = Number(frm.inVelocidadeCondutor.value)

    if (velocidadeCondutor <= velocidadePermitida) {
        alert(`Situação: Sem Multa`)
    }
    else if (velocidadeCondutor <= velocidadePermitida + (velocidadePermitida * 0.20)) {
        alert(`Situação: Multa Leve`)
    }
    else {
        alert(`Situação: Multa Grave`)
    }
})