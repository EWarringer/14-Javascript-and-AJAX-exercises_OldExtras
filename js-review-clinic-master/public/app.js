$(document).ready(function(){
  $("#new-option-form").on("submit", function(event) {
    event.preventDefault();
    var variableOne = $("#new-option-field")[0].value;
    if (variableOne.length > 0) {
      // do submit the form
      variableTwo(variableOne);
    } else {
      //don't submit the form
      alert("You need to write something in the text field!")
    }
  });
  var variableTwo = function(variableThree) {
    var variableFour = $.ajax({
      method: "post",
      url: "new_option",
      data: { option: variableThree }
    })
    variableFour.success(function() {
      alert("successful post!")
      $('#new-vote-form').prepend('<label for="choice">'
        + '<input type="radio" name="choice" value="' + variableThree + '"> '
        + variableThree
        + '</label><br />'
    )
    });
  }
});
