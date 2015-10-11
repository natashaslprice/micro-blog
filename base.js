console.log("Sanity Check: JS is working!");

$(document).ready(function(){

	// find todays date and append to headerDate div
	var currentDate = new Date();
	// var currentDateShort = currentDate.val($.datepicker.formatDate('dd M yy', new Date()));
	$("#headerDate").append(currentDate);

	// find starting number of posts, append to count div
	var countPosts = $(".list").children().size();
	$("#count").append(countPosts + " posts");


	// take #newPostInput and append to list
	$(".btn").click(function(e) {
		e.preventDefault();
		
		var newPostInput = $("#newPostInput").val();
		var postDate = new Date();
		$(".list").append('<p>' + newPostInput + postDate + '</p>' +'<hr>');

		// increase post count and append to count div
		countPosts = countPosts + 1;
		$("#count").text(" ").append(countPosts + " posts");
	
	});

});

