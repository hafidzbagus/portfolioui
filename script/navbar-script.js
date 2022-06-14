// Navbar
// Desktop

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbarNav").style.top = "-10px";
  } else {
    document.getElementById("navbarNav").style.top = "-230px";
  }
  prevScrollpos = currentScrollPos;
};

$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});
