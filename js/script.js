$(document).ready(function(){
	$('#slider').owlCarousel({
    loop:true,
    margin:0,
    responsiveClass:true,
    autoplay:true,
    autoplayTimeout:3000,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:true,
            loop:true
        }
    }
})

$('#slider-film').owlCarousel({
    loop:true,
    margin:0,
    responsiveClass:true,
	autoplay:true,
    responsive:{
        0:{
            items:2,
            nav:false
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            loop:true
        }
    }
})

   $(window).scroll(function () {
     var _scrollTop = $(window).scrollTop();
     if (_scrollTop > 72) {
         $("#main-menu").addClass("fix-top");
         return false;
     } else {
         $("#main-menu").removeClass("fix-top");
         return false;
     }
    })
   $('#btnmenu').click(function(){
       $('#menutop').slideToggle(500,"linear");
   })
});
