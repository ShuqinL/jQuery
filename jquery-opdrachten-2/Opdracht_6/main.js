// Write your solution here
/* Oefening 6
Wanneer de muis over een gekleurde knop beweegt, kleur de tekst. 
De tekst moet weer zwart worden als de muis de knop verlaat. */


$(document).ready(function(){
    $("#green").hover(function(){
        $("#text").css("color","green");
    },
    function(){
        $("#text").css("color","black");
    });
    
    $("#red").hover(function(){
        $("#text").css("color","red");
    },
    function(){
        $("#text").css("color","black");
    });

    $("#blue").hover(function(){
        $("#text").css("color","blue");
    },
    function(){
        $("#text").css("color","black");
    });

});