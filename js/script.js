$(".banner-slider").slick({
    arrows: false,
    dots: true,
    fade: true,
});
$(".image-slider").slick({
    arrows: false,
    dots: true,
    slidesToShow: 5,
});

$('.venobox').venobox(); 


// FEATURE PART


$(".item").click(function(){
    $(".item-content").html("d-block");
    $(".item-content").show()

});
// $(".show-2").click(function(){
//     $(".item-content-1").hide()
//     $(".item-content-2").show()
// });
// $(".show-3").click(function(){
//     $(".item-content-3").fadeToggle()
// });
// $(".show-4").click(function(){
//     $(".item-content-4").fadeToggle()
// });
// $(".show-5").click(function(){
//     $(".item-content-5").fadeToggle()
// });
