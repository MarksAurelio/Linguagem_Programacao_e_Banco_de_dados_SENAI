// criar uma referência ao form e ao h3 (onde será exibida a resposta)
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

// cria um 'ouvinte', espera uma ação em um determinado lugar, acionando quando o botão submit for clicado
frm.addEventListener("submit", (e)=>{
    const nome = frm.inNome.value; // obtém o nome digitado no form
    resp.innerText = `Olá ${nome}`;
    e.preventDefault(); // vai enviar que o form enviou os dados pro destino
})

function executar(evento) {
    const nome = frm.inNome.value; // obtém o nome digitado no form
    resp.innerText =  `Olá ${nome}`; // exibe a resposta do programa
    evento.preventDefault();
}