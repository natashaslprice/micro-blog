A mico-blog for general thoughts and ideas.

Users can add posts. Hovering over the posts will show the user at what 
time and date the post was created. 

HTML5 local storage has been used so that posts are saved locally and can
be viewed even once the browser window has been closed and re-opened. 

Users can comment on new posts.

Used JQuery, Bootstrap, dateFormat.

Issues: 
- commenting on old posts does not work - can't work out why not! 
- local storage for comments doesn't work because it won't re-append the comments to the correct posts when the page is refreshed
- deleting posts does not delete the individual posts from local storage. I spent a lot of time trying to work this out and I don't think it will work with how I have set up my JQuery. 

User story:
As someone with lots to do and think about I want an easy way to keep track of general thoughts and ideas. 