var apiKey = require('./../.env').apiKey;

$(document).ready(function(){
	$('#userInput').click(function(){
		var userName = $('#userName').val();
		
		  $.get('https://api.github.com/users/' + userName + '?access_token=' + apiKey).then(function(response){
		  	
		    console.log(response);
		  }).fail(function(error){
		    console.log(error.responseJSON.message);
		  });
	});
});