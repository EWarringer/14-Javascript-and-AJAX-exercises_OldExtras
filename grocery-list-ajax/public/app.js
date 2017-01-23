$(document).ready(function() {
  $('form').submit(function(event) {
    // STEP 1: prevent the default action (form submission) from happening
    event.preventDefault();


    // STEP 2: pull the grocery item entered by the user in the form
    // from the DOM
    var userInput = $("form input")[0].value;

    // STEP 3a: call the submitGroceryItemViaAjax function with the
    // correct argument, if the form was filled out
    if (userInput.length > 0) {
      submitGroceryItemViaAjax(userInput);
    } else {
    // STEP 3b: show an alert message if the form is empty
      alert("We'd really appreciate it if you filled in the text field. Thank you :)");
    };

  });
});

var submitGroceryItemViaAjax = function(item) {
  // create ajax request
  var request = $.ajax({
    method: "post",
    url: "/groceries",
    data: { item: item }
  });

  // if ajax request is successful, update the DOM
  request.success(function() {
    // alert("Successful AJAX request! Now update the DOM");
    // STEP 7a: comment out the line above
    // STEP 7b: write code to update the DOM with the new item name
    $('#grocery-list').prepend(
      '<li class="item">' + item + '</li>'
    )
  });
};

// EXCEEDS EXPECTATIONS ( deletes items upon click )
$("li").click(function(event) {
  event.preventDefault();
  $(this).remove();
  //  deleteGroceryItemViaAjax(this.innerHTML);
});

// var deleteGroceryItemViaAjax = function(item) {
//   // create ajax request
//   var request = $.ajax({
//     method: "DELETE",
//     url: "/groceries",
//     data: { item: item }
//   });
// }
