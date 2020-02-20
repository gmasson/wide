/*
* Wide 1.2
* https://github.com/gmasson/wide/
* License MIT
*/

/*
* IDs dos elementos
*/

/* Onde é inserido o conteúdo */
var wContent = "results-area";

/* Estrutura do post*/
var wResultTemplate = "result-template";

/* Campo de busca */
var wSearchInput = "search-input";

/* Imagem do resultado */
var wResultImg = "result-img";

/* Titulo do resultado */
var wResultTitle = "result-title";

/* Descrição do resultado */
var wResultDescr = "result-descr";

/* Link do resultado */
var wResultLink = "result-link";


/*
* Funções principais
*/

/* Capturar elementos através do ID */
function wId(id) {
	return document.getElementById(id);
}

/* Exibe elementos através do ID */
function wShow(id) {
	return document.getElementById(id).style.display='block';
}

/* Ocultar elementos através do ID */
function wHidden(id) {
	return document.getElementById(id).style.display='none';
}


/*
* Algorítimo de execução
*/

/* Coloca os elementos em variaveis */
var wContent = wId(wContent);
var wResultTemplate = wId(wResultTemplate);
var wSearchInput = wId(wSearchInput);

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
		var item = document.importNode(wResultTemplate.content, true);

		/* Aqui indicamos os dados e onde serão inseridos */
		//item.getElementById(wResultImg).setAttribute("href", dataItem.img);
		//item.getElementById(wResultImg).setAttribute("alt", dataItem.img_alt);
		item.getElementById(wResultTitle).textContent = dataItem.title;
		item.getElementById(wResultDescr).textContent = dataItem.descr;
		item.getElementById(wResultLink).setAttribute("href", dataItem.link_url);
		item.getElementById(wResultLink).textContent = dataItem.link_name;

		wContent.appendChild(item);
	});
}

/* Limpa os itens para fazer uma nova busca */
function wClearItems() {
	wContent.innerHTML = '';
}

function wideStart(wShowAll = '') {
	/* Com o parametro 'all', é exibido todos cadastros, mesmo que o campo esteja vazio */
	/* Busca itens quando o input for modificado */
	wSearchInput.addEventListener('input', function(e) {
		const value = e.target.value.toLowerCase();
		if (value == '') {
			wClearItems();
			if (wShowAll == 'all') {
				wShowItems();
			}
		} else {
			wClearItems();
			wShowItems(value);
		}
	});

	if (wShowAll == 'all') {
		wShowItems();
	}
}