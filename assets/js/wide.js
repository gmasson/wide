// Onde é inserido
var content = document.getElementById("content");

// Estrutura do post
var tmplItem = document.getElementById("templatePost");

// Campo de busca
var search = document.getElementById("search");

// Função para mostrar os itens na tela
function showItems(search) {
  // Filtra os itens de acordo com o texto digitado na busca por titulo e descricao
  const filteredData = database.filter(item =>
    item.descricao.toLowerCase().includes(search)
    || item.titulo.toLowerCase().includes(search)
  );

  filteredData.forEach(function (dataItem, indice) {
    // Clonando conteudo do template.
    var item = document.importNode(templatePost.content, true);

    // Atualizando o novo item com os valores do dataItem atual.
    item.querySelector(".urlPost").setAttribute("href", dataItem.url);
    item.querySelector(".titlePost").textContent = dataItem.titulo;
    item.querySelector(".descriPost").textContent = dataItem.descricao;
    content.appendChild(item);
  });
}

// Limpa os itens para fazer uma nova busca
function clearItems() {
  content.innerHTML = '';
}

// Busca itens quando o input for modificado
search.addEventListener('input', function (e) {
  const value = e.target.value.toLowerCase();
  clearItems();
  showItems(value);
});

showItems('');