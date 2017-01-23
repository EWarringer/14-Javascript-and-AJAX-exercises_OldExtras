// $(".row a").click(function() {
//   alert("<%= dish %>");
// });

$("#get-dish").on("click", function() {
   $.get("/new-dish.json", function( data ) {
   alert("Your new random dish is " + data["dish"]);
 });
});

// $("class name / id name / tage name").on( "event (click)" , what you want to happen )

  // $("#get-dish").on("click", something);
