/*
* Wide 0.9
* https://github.com/gmasson/widejs/
* License MIT
*/

/* Capturar elementos através do ID */
function wId(id) {
	return document.getElementById(id);
}

/* Captura os elementos através do ID */
var wideContent = wId(wideResultArea);
var wideResultTemplate = wId(wideResultTemplate);
var wideSearchInput = wId(wideSearchInput);

/* Função para mostrar os itens na tela */
function wShowItems(search = '') {
	/*
	Filtra os itens de acordo com o texto digitado na busca por titulo e descricao
	OBS: aqui você pode incluir mais critérios de busca
	*/
	const wFilteredData = database.filter(item =>
		item.title.toLowerCase().includes(search)
		|| item.descr.toLowerCase().includes(search)
		|| item.tags.toLowerCase().includes(search)
	);

	wFilteredData.forEach(function (dataItem) {
		/* Clonando conteudo do template (não funciona no querido Internet Explorer) */
		var item = document.importNode(wideResultTemplate.content, true);

		/* Aqui indicamos os dados e onde serão inseridos */
		item.getElementById(wideResultImg).setAttribute("src", dataItem.img);
		item.getElementById(wideResultImg).setAttribute("alt", dataItem.img_alt);
		item.getElementById(wideResultTitle).textContent = dataItem.title;
		item.getElementById(wideResultDescr).textContent = dataItem.descr;
		item.getElementById(wideResultLink).setAttribute("href", dataItem.link_url);
		item.getElementById(wideResultLink).textContent = dataItem.link_name;

		wideContent.appendChild(item);
	});
}

/* Limpa os itens para fazer uma nova busca */
function wClearItems() {
	wideContent.innerHTML = '';
}

/* Com o parametro 'all', é exibido todos cadastros, mesmo que o campo esteja vazio */
/* Busca itens quando o input for modificado */
wideSearchInput.addEventListener('input', function(e) {
	const value = e.target.value.toLowerCase();
	if (value == '') {
		wClearItems();
		if (wideShowAll == 'all') {
			wShowItems();
		}
	} else {
		wClearItems();
		wShowItems(value);
	}
});

if (wideShowAll == 'all') {
	wShowItems();
}