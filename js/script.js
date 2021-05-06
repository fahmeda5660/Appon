// ************************BANNER-SLIDER************************
$(".banner-slider").slick({
    arrows: false,
    dots: true,
    fade: true,
});
// ************************IMAGE-SLIDER************************
$(".image-slider").slick({
    arrows: false,
    dots: true,
    slidesToShow: 5,
});
// ************************FEEDBACK************************
$(".text-slider").slick({
    arrows: false,
    dots: false,
    slidesToShow: 1,
    asNavFor: ".testi-img-slider", 
})

$(".testi-img-slider").slick({
    arrows: false,
    dots: true,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "0",
    asNavFor: ".text-slider",
})
// ************************VENOBOX************************
$('.venobox').venobox(); 

// ************************FEATURE-PART:MixItUp************************
$(document).ready(function() {

    var containerEl = document.querySelector('.mixitup');
    var mixer = mixitup(containerEl, {
        
        animation: {
            duration: 10
        },
        
    });
    mixer.filter('.item-content-1');
    
});
// ************************WOW************************

$(document).ready(function(){
    new WOW().init();
});
