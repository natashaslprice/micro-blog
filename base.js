console.log("Sanity Check: JS is working!");

$(document).ready(function(){

	// find todays date and append to headerDate div
	var currentDate = new Date();
	var currentDateShort = $.format.date(currentDate, 'H:mm ddd d MMM');
	
	$("#headerDate").append(currentDateShort);

	// find starting number of posts, append to count div
	var countPosts = $(".list").children().size();
	$("#count").append(countPosts + " posts");


	// take #newPostInput and append to list
	$(".btn").click(function(e) {
		e.preventDefault();
		
		var newPostInput = $("#newPostInput").val();
		$(".list").append('<p>' + newPostInput + '</p>' +'<hr>');
		$("p").append('<button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="right" title="Tooltip on right">' + new Date() + '</button>');

		// increase post count and append to count div
		countPosts = countPosts + 1;
		$("#count").text(" ").append(countPosts + " posts");
	
	});

});

