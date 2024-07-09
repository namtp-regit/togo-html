$(document).ready(function () {
  // $(".counter").counterUp({
  //   delay: 8,
  //   time: 1000,
  // });
  // $(".counter").addClass("animated fadeInDownBig");

  $("#toggle").click(function () {
    $(this).toggleClass("open");
    $("#overlay").toggleClass("open");
    $("#header-fix").toggleClass("open");
  });
  $("#overlay li a").on("click", function () {
    $("#overlay").toggleClass("open");
    // $('#header-fix').toggleClass('open');
  });

//   $(document).mouseup(function (e) {
//     const container = $("#toggle");
//     if (container.hasClass('open')) {
//         $("#overlay").toggleClass("open");
//         $(container).toggleClass("open");
//     }
//   });

  $(".owl-space").owlCarousel({
    loop: true,
    center: true,
    margin: 106,
    nav: true,
    dots: true,
    // autoWidth:true,
    // autoplay: true,
    // autoplayTimeout: 3000,
    // autoplaySpeed: 1500,
    responsive: {
      0: {
        items: 1,
      },
      500: {
        items: 2,
      },
      768: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  });

  $(".owl-menu").owlCarousel({
    loop: true,
    center: true,
    margin: 4,
    nav: false,
    dots: true,
    // autoWidth:true,
    // autoplay: true,
    // autoplayTimeout: 3000,
    // autoplaySpeed: 1500,
    responsive: {
      0: {
        items: 1,
      },
      500: {
        items: 2,
      },
      768: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  });

  $(window).on("load scroll", function () {
    //現時点のスクロールの高さ取得
    const scrollPosition = $(window).scrollTop();
    //ウィンドウの高さ取得
    const windowHeight = $(window).height();

    $(".animation_box").each(function () {
      //要素の位置（高さ）を取得
      const elemPosition = $(this).offset().top;
      //スクロールの高さが要素の位置を超えたら以下のスタイルを適用
      if (elemPosition < scrollPosition + windowHeight) {
        $(this).css({
          opacity: 1,
          transform: "translateX(0)",
        });
      }
    });
  });
});
