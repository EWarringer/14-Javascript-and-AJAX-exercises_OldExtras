
// Find the top navbar by query for the element type, which is <nav>.
document.getElementsByTagName("nav")[0];

// Find the sidebar on the right by using it's id.
document.getElementById('sidebar-right');

// Find the "Pages" and "Groups" sections of the sidebar by using their class.
document.getElementsByClassName("pages")[0];
document.getElementsByClassName("groups")[0];

// Finding Child Elements
document.getElementById('sidebar-left').getElementsByTagName('div');

// Find all of the comments on the page.
document.getElementsByClassName('comments');

// Find the first comment on the page.
document.getElementsByClassName('comments')[0];
// Find the last comment on the page.
var last = document.getElementsByClassName('comments');
last[last.length-1]
// Find the fourth comment on the page.
document.getElementsByClassName('comments')[3];


// Find one of the ads in the sidebar and hide them.
var hideAd = document.getElementsByClassName('ad-slot')[1];
hideAd.style.visibility = "hidden";

// Set the visibility to the form that you hid in the previous step to make it visible again.
hideAd.style.visibility = "visible";

//Use setAttribute to change src attribute of one of the ads in the sidebar.
var getImage = document.getElementsByClassName('ad-slot')[0];
var anything = getImage.getElementsByTagName('img')[0];
anything.setAttribute('src', 'http://placebear.com/200/300');

//Find Sam's post and change it's text to something incredible.
var sam = document.getElementsByClassName("media-body")[8];
var post = sam.getElementsByTagName('p')[0];
post.innerHTML = "Officially changed to something incredible!";

// Find the first post and add the .post-liked class to it.
var post = document.getElementsByClassName('post media')[0];
post.className = post.className + " post-liked"

// Find the second post and remove the .post-liked class.
post.classList.remove('post-liked')
