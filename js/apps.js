$(document).ready(function () {
  console.log("Start");
  //   $("slideService").on("click", function () {
  //     $("#service").scroll(5000);
  //   });
  //   BUAT NAVIGASI STICKY DAN PERUBAHAN COLOR NAV
  $(window).scroll(function () {
    let scroll = $(window).scrollTop();
    if (scroll > 300) {
      $("nav").addClass("bg-secondary");
    } else {
      $("nav").removeClass("bg-secondary");
    }
  });
});
