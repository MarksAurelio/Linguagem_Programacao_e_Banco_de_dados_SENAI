
function calcular() {
    const nome = document.getElementById("inNome").value
    const masculino = document.getElementById("inMasculino").checked
    const altura = document.getElementById("inAltura").value

    let peso

    if (masculino) {
        peso = 22 * Math.pow(altura, 2)
    } else {
        peso = 21 * Math.pow(altura, 2)
    }

    document.querySelector("h3").innerText = `Peso ideal ${peso.toFixed(2)}`

    return false // vai impedir o refresh da página equivalente ao e.preventDefault()
}

/*
const frm = document.querySelector('form')
const resp = document.querySelector('h3')

frm.addEventListener('submit', (e) => {
    e.preventDefault()

    const nome = frm.inNome.value
    const masculino = frm.inMasculino.value.checked
    const altura = Number(frm.inAltura.value)

    let peso
    if (masculino) { // se masculino (ou, if masculino == true)
        peso = 22 * Math.pow(altura, 2)
    }
    else { peso = 21 * Math.pow(altura, 2) }

    resp.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(3)} Kg`
})
    */