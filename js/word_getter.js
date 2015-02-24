window.onload=init;
var originalWord;
var translateWord;
var body;

function init() {
	originalWord = document.getElementById("original_word");
	translateWord = document.getElementById("translate_word");
	body = document.getElementById("body");
	setInterval(getWord, 10000);
}

function getWord() {
<<<<<<< HEAD
	loadPage("http://www.rususa.com.ext.zawq.ru/dictionary/random.asp-lang-rus?", actionAfterAjax);
=======
  console.log("load page start")
  randomWord();
>>>>>>> 997035c0961b3b3528b0749328eb9b8e5da37083
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
