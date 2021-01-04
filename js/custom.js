$(document).ready(function(){

    /*header color change*/
    $(window).on("scroll", function(){
        var scrolldistance = $(window).scrollTop();
        var $header = $(".js-header");
        if (scrolldistance > 80){
            $header.addClass("header--colored");
        }
        else{
            $header.removeClass("header--colored");
        }
    })
    /*WoW pluging initialize */
    wow = new WOW(
        {
          boxClass:     'wow',  
          animateClass: 'animated',
          offset: 50,
        }
      );
      wow.init();
      
    
})