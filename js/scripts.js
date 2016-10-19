$(document).ready(function(){
  $("#blanks form").submit(function(event){
    $(".name").text($("input#name").val());
    $(".streetAddress").text($("input#streetAddress").val());
    $(".cityState").text($("input#cityState").val());

    $(".letter").show();
    event.preventDefault();
  });
});
