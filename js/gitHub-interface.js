var apiKey = require('./../.env').apiKey;
var getInformation = require('./../js/gitHub.js').getInformation;

$(document).ready(function(){
	$('#userInput').click(function(){
		var userName = $('#userName').val();
		getInformation();
	});
});
