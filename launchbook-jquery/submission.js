// Find the top navbar by query for the element type, which is <nav>.
$('nav');

//  Find the sidebar on the right by using it's id.
$('.pages');
$('.groups');

// Find all of the comments on the page.
$('.panel');

// Find the first comment on the page.
$('.panel:first');
//or
$('.panel').first();

// Find the last comment on the page.
$('.panel:last');
// or
$('.panel').last();

// Find the fourth comment on the page.
$($('.panel')[3]);

// Find one of the ads in the sidebar and use .hide() to hide it.
$('.ad-slot:nth-child(2)').hide();

// Use .show() to make the ad that you hid in the previous step visible again.
$('.ad-slot:nth-child(2)').show();

// Use .toggle() to toggle the display of the nav bar at the top of the page.
$('.ad-slot:nth-child(2)').toggle();

// Use .attr() to change src attribute of one of the ads in the sidebar.
$(".ads div:nth-child(3) img").attr('src', 'http://placebear.com/200/300');

// Find Sam's post and change it's text to something incredible.
$('.posts .media-body:first p:first').text('Text officially changed to something Incredible!');


// Find the first post and use .addClass() to add the .post-liked class to it.
$('.post:first').addClass('post-liked');
// Find the second post and use .removeClass() to remove the .post-liked class.
$('.post:nth-child(2)').removeClass('post-liked');
//Find any post and use .toggleClass() to toggle the .post-liked class.
$('.post:last').toggleClass('post-liked');
