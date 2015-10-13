console.log("Sanity Check: JS is working!");

$(document).ready(function(){

	// find todays date and append to headerDate div
	var currentDate = new Date();
	var currentDateTime = $.format.date(currentDate, 'H:mm');
	var currentDateDate = $.format.date(currentDate, 'ddd d MMM');

	$("#headerDate").append(currentDateTime + '<hr>' + currentDateDate);


	// if posts or comments in local storage, add to list
	if (localStorage.getItem('posts')) {
		$(".list").html(localStorage.getItem('posts'));
	}
	if (localStorage.getItem('comments')) {
		$(".newCommentList").html(localStorage.getItem('comments'));
	}


	// find starting number of posts, append to count div
	var countPosts = $(".newPost").size();
	$("#count").append(countPosts + " posts");


	// create delete button
	var deleteButton = '<button type="button" class="deleteButton" class="btn btn-default btn-sm"> <span class="glyphicon glyphicon-trash" aria-hidden="true"></span></button>';


	// on submit 
	$("#form").on('submit', function(e) {
		e.preventDefault();
		
		// check if #newPostInput has content and prepend
		if ($("#newPostInput").val().trim().length > 0) {
			var newPostInput = $("#newPostInput").val();
			var newPostDate = new Date();
			var newPostDateShort = $.format.date(newPostDate, 'H:mm, ddd d MMM');
			var comment = '<div class="input-group comment"><input type="text" class="commentInput form-control" placeholder="Add comment..."><span class="input-group-btn commentAdd"><button type="button" class="btn btn-default">Add!</button></span></div>';

			$(".list").prepend('<div class="newPost"><p data-toggle="tooltip" data-placement="right" data-trigger="hover" title="' + newPostDateShort + '">' + newPostInput + deleteButton + '<hr>' + comment + '<p class="newCommentList"></p>' + '</p></div>');

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
		$(this).closest("div").remove();	
		countPosts = countPosts - 1;
		$("#count").text(" ").append(countPosts + " posts");
	});


	// on click of add comment button
	$(".list").on("click", ".commentAdd", function(e) {
		e.preventDefault();

		// check if .commentInput has content and prepend
		if ($(".commentInput").val().trim().length > 0) {
			var commentInput = $(this).parent().find(".commentInput").val();
			var commentDate = new Date();
			var commentDateShort = $.format.date(commentDate, 'H:mm, ddd d MMM');
			$(this).parent().siblings("p.newCommentList").prepend(commentInput + ' - ' + commentDateShort + '<br>');
		}

		// clear .commentInput area once comment prepended to list
		$(".commentInput").val("");

		// add new comment to local storage
		var comment = $(".newCommentList").html();
		localStorage.setItem('comments', comment);
	});


	// delete all from local storage
	$("#deleteAllButton").click(function(e) {
		e.preventDefault();
		localStorage.removeItem('posts');
		location.reload();
	});

});

