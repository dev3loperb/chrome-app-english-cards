function loadPage(url, callback) {
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.onreadystatechange=function() {
		callback(xmlHttp.responseText);
	};
	xmlHttp.open("GET", url, true);
	xmlHttp.send(null);
}