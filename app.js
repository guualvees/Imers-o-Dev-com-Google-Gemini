document.addEventListener("DOMContentLoaded", function() {
    // Preenche a lista de gêneros
    preencherListaGeneros();

    // Adiciona ouvintes de eventos para o campo de pesquisa e o botão
    document.getElementById("campo-pesquisa").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Impede o comportamento padrão do Enter (como enviar um formulário)
            pesquisar(); // Chama a função de pesquisa
        }
    });

    document.querySelector("button").addEventListener("click", function() {
        pesquisar(); // Chama a função de pesquisa ao clicar no botão
    });

    // Adiciona ouvintes de eventos para os itens da lista de gêneros
    document.getElementById("lista-generos").addEventListener("click", function(event) {
        if (event.target.tagName === "LI") {
            pesquisarPorGenero(event.target.textContent); // Pesquisa por gênero ao clicar
            window.scrollTo({ top: 0, behavior: 'smooth' }); // Rola para o topo da página suavemente
        }
    });
});

function preencherListaGeneros() {
    let generosSet = new Set();

    // Coleta todos os gêneros únicos
    dados.forEach(dado => {
        dado.genero.split(', ').forEach(genero => generosSet.add(genero));
    });

    // Converte o Set para um Array e ordena alfabeticamente
    let generosArray = Array.from(generosSet).sort();

    let listaGeneros = document.getElementById("lista-generos");
    listaGeneros.innerHTML = ""; // Limpa a lista antes de adicionar novos itens

    // Adiciona cada gênero à lista
    generosArray.forEach(genero => {
        let li = document.createElement("li");
        li.textContent = genero;
        listaGeneros.appendChild(li);
    });
}

function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value.trim().toLowerCase();
    let resultados = "";

    if (typeof dados !== 'undefined' && Array.isArray(dados)) {
        let encontrouResultado = false;

        for (let dado of dados) {
            if (dado.titulo.toLowerCase().includes(campoPesquisa)) {
                encontrouResultado = true;
                resultados += `
                    <div class="item-resultado">
                        <h2>
                            <a href="${dado.link}" target="_blank">${dado.titulo}</a>
                        </h2>
                        <p><strong>Gênero:</strong> ${dado.genero}</p>
                        <p><strong>Resumo:</strong> ${dado.resumo}</p>
                        <a href="${dado.assistirOnline}" target="_blank">Assistir Online</a><br>
                    </div>
                `;
            }
        }

        if (!encontrouResultado) {
            resultados = '<p>Anime não encontrado...</p>';
        }
    } else {
        console.error("A variável 'dados' não está definida ou não é um array.");
        resultados = '<p>Erro ao carregar os dados.</p>';
    }

    section.innerHTML = resultados;
}

function pesquisarPorGenero(generoSelecionado) {
    let section = document.getElementById("resultados-pesquisa");
    let resultados = "";

    if (typeof dados !== 'undefined' && Array.isArray(dados)) {
        let encontrouResultado = false;

        for (let dado of dados) {
            // Verifica se o gênero selecionado está entre os gêneros do anime
            if (dado.genero.split(', ').includes(generoSelecionado)) {
                encontrouResultado = true;
                resultados += `
                    <div class="item-resultado">
                        <h2>
                            <a href="${dado.link}" target="_blank">${dado.titulo}</a>
                        </h2>
                        <p><strong>Gênero:</strong> ${dado.genero}</p>
                        <p><strong>Resumo:</strong> ${dado.resumo}</p>
                        <a href="${dado.assistirOnline}" target="_blank">Assistir Online</a><br>
                    </div>
                `;
            }
        }

        if (!encontrouResultado) {
            resultados = '<p>Nenhum anime encontrado para este gênero...</p>';
        }
    } else {
        console.error("A variável 'dados' não está definida ou não é um array.");
        resultados = '<p>Erro ao carregar os dados.</p>';
    }

    section.innerHTML = resultados;
}
