var apiKey = require('./../.env').apiKey;

$(document).ready(function(){
	$('#userInput').click(function(){
		var userName = $('#userName').val();
		
		  $.get('https://api.github.com/users/' + userName + '?access_token=' + apiKey).then(function(response){
		  	$('.fullName').text('Name:' + response.name + '.');
		  	$('.followers').text('# of Followers:' + response.followers);
		  	$('.email').text('Email:' + response.email );
		    console.log(response);
		  }).fail(function(error){
		    console.log(error.responseJSON.message);
		  });
	});
});