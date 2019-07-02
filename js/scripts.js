var $ = jQuery.noConflict();

$(window).on("scroll", function() {
  if ($(window).scrollTop()) {
    $("nav.block-menu.menu--main, .region-header a.site-logo img").addClass(
      "sticky"
    );
  } else {
    $("nav.block-menu.menu--main, .region-header a.site-logo img").removeClass(
      "sticky"
    );
  }
});

$(document).ready(function() {
  if (window.location.href.indexOf("news") >= 0) {
    $(".layout-content").addClass("post-content-70");
    $(".layout-sidebar-second").addClass("sidebar-content-30");
  }
});
