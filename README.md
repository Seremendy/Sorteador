<h1>Sorteador de nomes</h1> 

<p align="center">
 <img alt="Static Badge" src="https://img.shields.io/badge/HTML-red">
 <img alt="Static Badge" src="https://img.shields.io/badge/CSS-blue">
<img alt="Static Badge" src="https://img.shields.io/badge/JavaScript-yellow">
</p>

> Status do Projeto: em desenvolvimento :warning:

## Descrição do projeto 

<p align="justify">
  Você insere o nome das pessoas e clica em sortear e aleatoriamente vai sair um nome.
</p>

## Funcionalidades


<details><summary> :heavy_check_mark: Função adicionarAmigo </summary>
 <p>
   
```
function adicionarAmigo () {
    let botaoListaDeAmigos = document.getElementById('amigo').value; 
    if (botaoListaDeAmigos.trim() === '') {
        alert('Por favor, insira um nome.')
    } else {
        nomes.push(botaoListaDeAmigos)
        atualizarLista();
    }
}
```

O que ela faz:<br>
Pega o valor inserido pelo usuário no campo de entrada com o `id` `amigo`.<br>
Verifica se o campo está vazio:<br>
Se sim, exibe um alerta pedindo para inserir um nome.<br>
Se não, o nome é adicionado ao array `nomes` usando o método `.push`<br>
Chama a função `atualizarLista` para atualizar a exibição da lista de amigos.
 </p>
</details>



<details><summary>:heavy_check_mark: Função atualizarLista  </summary>
 <p>
   
```
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

```

O que ela faz:<br>
Obtém o elemento da lista de amigos com o `id` `listaAmigos`.<br>
Limpa o conteúdo atual da lista (`innerHTML = ''`).
Percorre o array nomes e:<br>
Cria um elemento `<li>` para cada nome.<br>
Define o conteúdo de texto do `<li>` como o nome correspondente.<br>
Adiciona o `<li>` à lista (`listaAmigos`).<br>
Limpa o campo de entrada após adicionar o nome.
 </p>
</details>


 
<details><summary>:heavy_check_mark:Função sortearAmigo</summary>
 <p>
   
```
function sortearAmigo () {
    let indiceAleatorio = Math.floor(Math.random() * nomes.length);
    let amigoSorteado = nomes[indiceAleatorio];
    document.getElementById('resultado').innerHTML = `Amigo sorteado: ${amigoSorteado}`;
    limparTudo();
}
```
Gera um índice aleatório com base no tamanho da lista `nomes`:<br>
Usa `Math.random` (número aleatório entre 0 e 1) e multiplica pelo tamanho do array.<br>
Converte para um número inteiro com `Math.floor`.<br>
Obtém o nome sorteado a partir do índice aleatório.<br>
Exibe o resultado no elemento com o `id` `resultado`.<br>
Chama a função `limparTudo` para limpar os dados após o sorteio.

 </p>
</details>

<details><summary>:heavy_check_mark:Função limparTudo</summary>
 <p>
   
```
function limparTudo() {
    nomes = [];
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
    document.getElementById('amigo').value = '';
}
```
Esvazia o array `nomes`.<br>
Remove os elementos da lista na interface (`listaAmigos`).<br>
Limpa o campo de resultado do sorteio (`resultado`).<br>
Reseta o campo de entrada (`amigo`).

 </p>
</details> 

## Tarefas em aberto

:memo: Adicionar validação para evitar nomes duplicados.

:memo: Incluir estilização para melhorar a interface visual.
