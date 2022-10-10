


(function(window) {
	var speakWord = "Good Bye";
	var bye = function (name) {
  		console.log(speakWord + " " + name);
	}
	
	window.bye = bye;

})(window);