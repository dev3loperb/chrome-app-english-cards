chrome.app.runtime.onLaunched.addListener(function(launchData) {
	chrome.app.window.create('index.html',  {
	  id: "mainWindow",
		bounds: {
			width: 300,
			height: 150
		},
		minWidth: 300,
		maxWidth: 400,
		minHeight: 150,
		maxHeight: 250,
		alwaysOnTop: true,
		focused: false,
		frame: "none"
	},
	function(createdWindow) {
	  var windowBounds = createdWindow.getBounds();
	  createdWindow.moveTo(
	    window.screen.availWidth - windowBounds.width,
	    window.screen.availHeight - windowBounds.height
	  );
	});
});