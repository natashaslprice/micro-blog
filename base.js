console.log("Sanity Check: JS is working!");

$(document).ready(function(){

	// find todays date and append to headerDate div
	var currentDate = new Date();
	var currentDateTime = $.format.date(currentDate, 'H:mm');
	var currentDateDate = $.format.date(currentDate, 'ddd d MMM');

	$("#headerDate").append(currentDateTime + '<hr>' + currentDateDate);

	// if something in local storage, add to list
	if (localStorage.getItem('posts')) {
		$(".list").html(localStorage.getItem('posts'));
	}

	// find starting number of posts, append to count div
	var countPosts = $("p").size();
	$("#count").append(countPosts + " posts");


	// take #newPostInput and prepend to list
	$("#form").submit(function(e) {
		e.preventDefault();
		
		if ($("#newPostInput").val().trim().length > 0) {
			var newPostInput = $("#newPostInput").val();
			var newPostDate = new Date();
			var newPostDateShort = $.format.date(newPostDate, 'H:mm, ddd d MMM');
			$(".list").prepend('<p data-toggle="tooltip" data-placement="right" data-trigger="hover" title="' + newPostDateShort + '">' + newPostInput + '</p>' + '<hr>');

			// increase post count and append to count div
			countPosts = countPosts + 1;
			$("#count").text(" ").append(countPosts + " posts");

			// clear text area once new post prepended to list
			$("#newPostInput").val("");

			// add new post to local storage
			var posts = $(".list").html();
			localStorage.setItem('posts', posts);
		}	
	});

	

});

