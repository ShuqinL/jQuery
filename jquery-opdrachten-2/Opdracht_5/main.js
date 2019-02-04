// Write your solution here

/* Oefening 5
Wanneer de gebruiker op een veld gefocused, stelt u de rand ervan in op "1px solid green". 
Wanneer het veld niet meer scherp is, zet de rand op "1px solid red". */

$(document).ready(function(){
    $("input").focus(function(){
        $(this).css("border","1px solid green");
    } );
    $("input").blur(function(){
        $(this).css("border","1px solid red");
    } );

});