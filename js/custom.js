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
    $(window).load(function() {
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 100,
            mobile: true,
            live: true
        });
        wow.init();
    });
    
})