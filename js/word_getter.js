window.onload=init;
window.addEventListener("resize", onmyPageResize, false);
var originalWord;
var translateWord;
var body;
var bodyBorder = 2;

function init() {
	originalWord = document.getElementById("original_word");
	translateWord = document.getElementById("translate_word");
	body = document.getElementById("body");
	setBodyView()
	setInterval(getWord, 10000);
}

function getWord() {
	loadPage("http://www.rususa.com.ext.zawq.ru/dictionary/random.asp-lang-rus?", actionAfterAjax);
}

function actionAfterAjax(ajaxResponse) {
	var parser = new DOMParser();
	var doc = parser.parseFromString(ajaxResponse, "text/html");
	findWords(doc);
}

function randomWord() {
  var wordServerUrl = "http://ipergenitsa.url.ph/randomWord.php";
  ajaxGet(wordServerUrl, handlingGetRandomWord);
}

function onmyPageResize() {
  setBodyView()
}

function setBodyView() {
  body.style.width = window.outerWidth - 2 * bodyBorder + "px"
  body.style.height = window.outerHeight - 2 * bodyBorder + "px"
}
