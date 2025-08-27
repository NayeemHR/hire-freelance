// 200px scrolling add class "is-sticky" to navbar
$(window).on("scroll", function () {
  if ($(this).scrollTop() > 100) {
    $(".site-header").addClass("bg-color");
  } else {
    $(".site-header").removeClass("bg-color");
  }
});

$(document).ready(function () {
  $('#site-nav').onePageNav();
});

$(function () {
  $('#nav-list').slicknav({
    label: '',
    prependTo: '#site-nav'
  });
});
