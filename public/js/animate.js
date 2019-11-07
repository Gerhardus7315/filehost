$(document).ready(function(){
  $("#yes").click(function(){
     $("#m2").hide();
     $("#m3").hide();
     $("#btndiv").hide();
     $("img").css("width", "250px");
     $("#m1").text("YAY!");
     $("#m1").css("font-size", "100px");
     setTimeout(function(){
       console.log("hello");
       document.forms["answer"].submit();
     }, 3000);
  });
});
