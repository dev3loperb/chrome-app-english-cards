chrome.app.runtime.onLaunched.addListener(function(launchData) {
	chrome.app.window.create('index.html',  {
		bounds: {
			width: 300,
			height: 150
		},
		minWidth: 300,
		maxWidth: 400,
		minHeight: 150,
		maxHeight: 250,
		alwaysOnTop: true,
		resizable: false,
		focused: false
	},
	function(createdWindow) {
	  var windowBounds = createdWindow.getBounds();
	  createdWindow.moveTo(
	    window.screen.availWidth - windowBounds.width,
	    window.screen.availHeight - windowBounds.height - 50
	  );
	});
});