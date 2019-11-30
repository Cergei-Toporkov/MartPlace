$(function() {
  $(".slider__item-info-rateyo").rateYo({
    rating: 4.5,
    starWidth: "16px",
    readOnly: true
  });
  $(".slider__inner").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  });
  $(".slider__top-prev").on("click", function() {
    $(".slider__inner").slick("slickPrev");
  });
  $(".slider__top-next").on("click", function() {
    $(".slider__inner").slick("slickNext");
  });
});
