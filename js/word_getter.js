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
  console.log("load page start")
  randomWord();
}

function handlingGetRandomWord(ajaxResponse) {
  console.log("page loaded. Word = " + ajaxResponse);
	if (ajaxResponse != null && ajaxResponse != "" && originalWord != null) {
	  console.log('ajaxResponse = ' + ajaxResponse);
	  var wordAndTranslate = JSON.parse(ajaxResponse);
	  originalWord.innerHTML = wordAndTranslate['word'];
	  translateWord.innerHTML = wordAndTranslate['translate'];
	}
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