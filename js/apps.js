$(document).ready(function () {
  console.log("Start");
  //   $("slideService").on("click", function () {
  //     $("#service").scroll(5000);
  //   });
  //   BUAT NAVIGASI STICKY DAN PERUBAHAN COLOR NAV
  $(window).scroll(function () {
    let scroll = $(window).scrollTop();
    if (scroll > 300) {
      $("nav").addClass("bg-white");
    } else {
      $("nav").removeClass("bg-white");
    }
  });
  // buat sticky tidakmenutupi heder
  $(".pageScroll").on("click", function (e) {
    let address = $(this).attr("href");
    let addressTo = $(address);
    $("html,body").animate({ scrollTop: addressTo.offset().top - 50 });
  });
  e.preventDefault();
});
