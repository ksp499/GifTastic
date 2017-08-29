$(document).ready(function() {

	var animal = ['cat', 'dog', 'rabbit', 'pig', 'cow', 'dinosaur', 'monkey', 'koala', 'bird', 'elephant'];

	// populate buttons 
	for (var i = 0; i < animal.length; i++) {
		var button = $('<button>');
		button.addClass('btn');
		button.addClass('btn-success');
		button.addClass('btn-lg');
		button.attr('type', 'button');
		button.attr('data-name', animal[i]);
		button.text(animal[i]);
		$('#animal-buttons').append(button);
	}

	// when button is clicked
	$('.btn').on('click', function() {
		var key = "320a00787cb241dd83c51f9d1aad8f91";
		var name = $(this).attr('data-name');
		var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + name + "&api_key=" + key;
		console.log(name);


	});

	var key = "320a00787cb241dd83c51f9d1aad8f91";
	var queryURL = "http://api.giphy.com/v1/gifs/search?q=&api_key=" + key;






});