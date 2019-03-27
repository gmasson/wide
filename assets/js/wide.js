// Onde é inserido
var content = document.getElementById("content");

// Modelo da estrutura do post
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

  // Populando conteudo.
  filteredData.forEach(function (dataItem, indice) {
    // Clonando conteudo do template.
    var item = document.importNode(tmplItem.content, true);

    // Atualizando o novo item com os valores do dataItem atual.
    item.querySelector(".urlPost").setAttribute("href", dataItem.url_post);
    item.querySelector(".imgPost").setAttribute("src", dataItem.url_img);
    item.querySelector(".imgPost").setAttribute("alt", dataItem.alt_img);
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