//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let nomes = [];

function adicionarAmigo () {
    let botaoListaDeAmigos = document.getElementById('amigo').value; 
    if (botaoListaDeAmigos.trim() === '') {
        alert('Por favor, insira um nome.')
    } else {
        nomes.push(botaoListaDeAmigos)
        atualizarLista();
        
    }

}


function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    for (let i = 0; i < nomes.length; i++){
        let li = document.createElement('li');
        li.textContent = nomes[i];
        lista.appendChild(li);
        document.getElementById('amigo').value = '';
    }
}

function sortearAmigo () {
    if (nomes.length === 0) {
        alert('Nenhum amigo disponível para sortear.');
        return;
    }
    
    let indiceAleatorio = Math.floor(Math.random() * nomes.length);
    let amigoSorteado = nomes[indiceAleatorio];
    document.getElementById('resultado').innerHTML = `Amigo sorteado: ${amigoSorteado}`;

    limparTudo();
}

function limparTudo() {
    nomes = [];
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
    document.getElementById('amigo').value = '';
}


