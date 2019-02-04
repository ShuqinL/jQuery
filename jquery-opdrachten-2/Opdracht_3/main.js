// Write your solution here

/* Oefening 3
Toon of verberg de tekst door op de bijgeleverde links te klikken. */



$(document).ready(function(){
    $("#show").click(function(){
        $("#text").show();
    } );
    
    $("#hide").click(function(){
        $("#text").hide();
    } );
    

});