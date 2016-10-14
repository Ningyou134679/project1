
$( function() {

    $( "#draggable" ).draggable();
} );

function test_submit(){
  $(".error").hide();

  var x = document.getElementById("login-form");
  if(x.elements["name"].value==""){
    $("#name_error").show();
    document.getElementById("name_error").innerHTML="Enter name";
    return false;
  }
  $("#name_error").hide();

  x = document.getElementById("pswd").value.length
  if(x<5||x>10) {
    $("#password_error").show();
    document.getElementById("password_error").innerHTML="Enter a password between length 5-10";
    return false;
  }
  $("#password_error").hide();

  $("#login-form").hide();
  $("#success-login").show();
  $("#div1").fadeOut(2000);
}

/*
$(document).ready(function() { 
   
      $('#picOne').fadeIn(1500).delay(3500).fadeOut(1500);
      $('#picTwo').delay(5000).fadeIn(1500);
    
});*/

setInterval(fading,0);

function fading(){
  $('#picOne').fadeIn(1000).delay(1000).fadeOut(1000).delay(2000);
  $('#picTwo').delay(2000).fadeIn(1000).delay(1000).fadeOut(1000);
}