/* Oefening 7
Samenvatting van de reeksen 1 en 2. De instructies zijn te vinden in het HTML-bestand. */


$(document).ready(function(){
    /* On click: Enlarge the font (120%) */
      $("ol li:first").click(function(){
          $("#content").css("font-size","120%");
      })
     
    /* On click: Decrease the font size (80%) */
    $("ol li").eq(1).click(function(){
        $("#content").css("font-size","80%");
    })
    
    /* On click: Bold or normalize the green words */
    $("ol li").eq(2).click(function(){
        $(".green").css("font-weight","bold");
    })
    
    /* On click: Bold or normalize the red words */
    $("ol li").eq(3).click(function(){
        $(".red").css("font-weight","bold");
    })
    
    
    /* On click: Replace the logo with another image */
    $("ol li").eq(4).click(function(){
        $("img").attr("src","images/koala.jpg");
    })
    
    
     /* On hover: Display the URL of links in a tooltip when hovering over links */
     $("a").mouseover(function(){
         $('[data-toggle="tooltip"]').tooltip();   
     })
    
    /* On click: add "Chapter 1:" before the 1st title h2 and "Chapter 2:" before the 2nd title h2 */
    $("ol li").eq(6).click(function(){
         $("#content h2").eq(0).before("<h1>Chapter 1:</h1>") ;
         $("#content h2").eq(1).before("<h1>Chapter 2:</h1>") ;
    })



});