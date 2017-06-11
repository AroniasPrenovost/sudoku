// fills default question mark fields on page load
$("document").ready(function() {
  $("input").val("?")
  $("input").prop("readonly", true);
});
// bold prepopulated values
$(document).ready(function(){
    $("button").click(function(){
    $("input").addClass("bold");
    });
});
// resets form field data sans readonly fields
$("#reset").click(function(){
  $("input").each(function(){
    if($(this).is("[readonly]") == false) {
       $(this).val(null);
    }
  });
});
// only allows numbers to remain in input
$(".nmbonly").on("change keyup", function() {
  var sanitized = $(this).val().replace(/[^0-9]/g, '');
  $(this).val(sanitized);
});
