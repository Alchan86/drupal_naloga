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
