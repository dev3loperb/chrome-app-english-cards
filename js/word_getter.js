function getWord() {
	loadPage("http://www.rususa.com/dictionary/random.asp-lang-rus", actionAfterAjax);
}

function actionAfterAjax(ajaxResponse) {
	var parser = new DOMParser();
	var doc = parser.parseFromString(ajaxResponse, "text/html");
	findWords(doc);
}

function findWords(sourceAsDOM) {
	if (sourceAsDOM.getElementById("divTranslation") == null) return;
	var translation = sourceAsDOM.getElementById("divTranslation").innerHTML.replace("<br>", "").trim();
	originalWord.innerHTML = sourceAsDOM.getElementById("divTranslation").parentNode.getElementsByTagName("b")[0].innerHTML;
	translateWord.innerHTML = translation;
}

window.onload=init;
var originalWord;
var translateWord;
var body;

function init() {
	originalWord = document.getElementById("original_word");
	translateWord = document.getElementById("translate_word");
	body = document.getElementById("body");
	body.onclick = getWord;
}