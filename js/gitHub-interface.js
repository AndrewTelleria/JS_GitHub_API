var apiKey = require('./../.env').apiKey;

$(document).ready(function(){
	$('#userInput').click(function(){
		var userName = $('#userName').val();
		
		  $.get('https://api.github.com/users/' + userName + '?access_token=' + apiKey).then(function(response){
		  	$('.avatar').append('<img src =' + response.avatar_url + ' alt= "Avatar picture" />');
		  	$('.fullName').text('Name: ' + response.name + '.');
		  	$('.followers').text('# of Followers: ' + response.followers);
		  	$('.email').text('Email: ' + response.email );
		  }).fail(function(error){
		    console.log(error.responseJSON.message);
		  });

		  $.get('https://api.github.com/users/' + userName + '/repos?access_token=' + apiKey).then(function(response){
		  	console.log(response);
		  	for(i = 0; i < response.length; i++){
		  		$('.repos').append('<li><b>Repos:</b> ' + response[i].name + '</li>')
		  		$('.repos').append('<li><b>Description:</b> ' + response[i].description + '</li>')
		  	}
		  }).fail(function(error){
		  	console.log(error.responseJSON.message);
		  });
	});
});