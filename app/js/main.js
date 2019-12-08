$(function() {
 var mixer = mixitup(".products__inner-box");
 $(".slider__item-info-rateyo").rateYo({
  rating: 4.5,
  starWidth: "16px",
 });
 $(".product__item-info-rateyo").rateYo({
  rating: 4.5,
  starWidth: "14px",
 });

 $(".slider__inner").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
 });
 $(".slider__top-prev").on("click", function() {
  $(".slider__inner").slick("slickPrev");
 });
 $(".slider__top-next").on("click", function() {
  $(".slider__inner").slick("slickNext");
 });

 $(".slider__followers-inner").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: false,
 });
 $(".slider__followers-top-prev").on("click", function() {
  $(".slider__followers-inner").slick("slickPrev");
 });
 $(".slider__followers-top-next").on("click", function() {
  $(".slider__followers-inner").slick("slickNext");
 });
 $(".js-range-slider").ionRangeSlider({
  type: "double",
  min: 0,
  max: 1000,
  from: 200,
  to: 500,
  grid: true,
 });
});
