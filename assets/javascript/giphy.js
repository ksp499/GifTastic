$(document).ready(function() {

	var animal = ['cat', 'dog', 'rabbit', 'pig', 'cow', 'dinosaur', 'monkey', 'koala', 'bird', 'elephant'];


	function populate() {
		$('#animal-buttons').empty();
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
			$('#for-gif').empty();
			var key = "320a00787cb241dd83c51f9d1aad8f91";
			var name = $(this).attr('data-name');
			var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + name + "&api_key=" + key +"&limit=10&rating=g";
			console.log(name);
			$.ajax({
				url: queryURL,
				method: "GET"
			})
			.done(function(response){
				var results = response.data;

				for (var i = 0; i < results.length; i++) {
		            var gifDiv = $("<div class='item'>");

		            var rating = results[i].rating;

		            var p = $("<p>").text("Rating: " + rating);

		            var animalImage = $("<img>");
		            animalImage.attr("src", results[i].images.fixed_height.url);

		            gifDiv.prepend(animalImage);
		            gifDiv.prepend(p);


		            $("#for-gif").append(gifDiv);
				}
			});
		});
	}


	// when adding button is clicked
	$('#add-animal').on('click', function() {

		var newName = $('#animal-input').val().trim();

		animal.push(newName);

		if (newName != '') {
			populate();
			$('#animal-input').val("");
		}

		return false;
	});

populate();

});