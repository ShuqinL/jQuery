// Write your solution here

/* Oefening 4
Wanneer je op een kleurknop klikt, verander je de kleur van de tekst van de div. */

$(document).ready(function(){
    $("#green").click(function(){
        $("#text").css("color","green");
    } );
    $("#red").click(function(){
        $("#text").css("color","red");
    } );
    $("#blue").click(function(){
        $("#text").css("color","blue");
    } );
    

});