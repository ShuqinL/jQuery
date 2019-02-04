// Write your solution here
/* Oefening 2
Met een dubbelklik, verander de breedte van de afbeelding naar 500px; */

$(document).ready(function(){
    $("img").dblclick(function(){
        $(this).css("width","500px");
    } );
    


});