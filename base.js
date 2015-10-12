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

	// create delete button
	var deleteButton = '<button type="button" class="deleteButton" class="btn btn-default btn-sm"> <span class="glyphicon glyphicon-trash" aria-hidden="true"></span></button>';


	// take #newPostInput and prepend to list
	$("#form").on('submit', function(e) {
		e.preventDefault();
		
		if ($("#newPostInput").val().trim().length > 0) {
			var newPostInput = $("#newPostInput").val();
			var newPostDate = new Date();
			var newPostDateShort = $.format.date(newPostDate, 'H:mm, ddd d MMM');
			$(".list").prepend('<div class="newPost"><p data-toggle="tooltip" data-placement="right" data-trigger="hover" title="' + newPostDateShort + '">' + newPostInput + deleteButton + '</p></div>');

			// increase post count and append to count div
			countPosts = countPosts + 1;
			$("#count").text(" ").append(countPosts + " posts");

			// clear text area once new post prepended to list
			$("#newPostInput").val("");

			// add new post to local storage
			var post = $(".list").html();
			localStorage.setItem('posts', post);
		}	
	});

	// delete post if trash button clicked, change number of posts in count div
	$(".list").on("click", ".deleteButton", function(e) {
		e.preventDefault();
		$(this).parent("p").remove();	
		countPosts = countPosts - 1;
		$("#count").text(" ").append(countPosts + " posts");
	});

	// delete all from local storage
	$("#deleteAllButton").click(function(e) {
		e.preventDefault();
		localStorage.removeItem('posts');
		location.reload();
	});

});

