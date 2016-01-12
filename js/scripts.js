$(document).ready(function(){
  $("#name-get form").submit(function(event) {
    var yourName = $("input#name").val();

    $(".name").text(yourName);

    $("#letter").show();

    event.preventDefault();
  });
});
