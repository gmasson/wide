/* Onde é inserido o conteúdo */
var content = document.getElementById("content");

/* Estrutura do post*/
var tmplItem = document.getElementById("templatePost");

/* Campo de busca */
var search = document.getElementById("search");

/* Função para mostrar os itens na tela */
function showItems(search) {
  /* Filtra os itens de acordo com o texto digitado na busca por titulo e descricao */
  const filteredData = database.filter(item =>
    item.descri.toLowerCase().includes(search)
    || item.title.toLowerCase().includes(search)
  );

  filteredData.forEach(function (dataItem, indice) {
    /* Clonando conteudo do template */
    var item = document.importNode(templatePost.content, true);

    /* Aqui indicamos os dados e onde serão inseridos */
    //item.querySelector(".imgPost").setAttribute("href", dataItem.img);
    //item.querySelector(".imgPost").setAttribute("alt", dataItem.img_alt);
    item.querySelector(".titlePost").textContent = dataItem.title;
    item.querySelector(".descriPost").textContent = dataItem.descri;
    item.querySelector(".linkPost").setAttribute("href", dataItem.link_url);
    item.querySelector(".linkPost").textContent = dataItem.link_name;

    content.appendChild(item);
  });
}

/* Limpa os itens para fazer uma nova busca */
function clearItems() {
  content.innerHTML = '';
}

/* Busca itens quando o input for modificado */
search.addEventListener('input', function (e) {
  const value = e.target.value.toLowerCase();
  clearItems();
  showItems(value);
});

showItems('');