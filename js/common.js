$(document).ready(function () {
  $(function () {
    $(".load-box").each(function () {
      var block = $(this);
      $(window).scroll(function () {
        var top = block.offset().top;
        var bottom = block.height() + top;
        top = top - $(window).height();
        var scroll_top = $(this).scrollTop();
        if (scroll_top > top && scroll_top < bottom) {
          block.addClass("visible");
        }
      });
    });
  });

  $(".main-slider").slick({
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
  });

  $(".header").hover(
    function () {
      $("body").addClass("white-header");
    },
    function () {
      $("body").removeClass("white-header");
    }
  );

  $(".menu-btn").on("click", function (e) {
    e.preventDefault();

    $(this).toggleClass("active");
    $(this).next(".submenu").toggleClass("active");
    $("body").toggleClass("menu-open");
    $(".menu > li:not(:last-child)").toggleClass("disabled");
    if ($(window).width() < 1025) {
      $("body").toggleClass("noscroll");
    }
  });

  $(".js--search").on("click", function (e) {
    e.preventDefault();
    $(".menu-btn").removeClass("active");
    $(".submenu").removeClass("active");
    $("body").removeClass("menu-open");
    $("body").addClass("search-open");
  });

  $(".js--sub-search-btn").on("click", function (e) {
    e.preventDefault();
    $(".sub-search-block").addClass("active");
  });

  $(".close-search").on("click", function (e) {
    e.preventDefault();

    $("body").removeClass("search-open");
  });

  $(".close-sub-search").on("click", function (e) {
    e.preventDefault();

    $(".sub-search-block").removeClass("active");
  });

  // Демонстрация работы подсказок в поиске
  $(".search-input").on("input", function () {
    $(".search-block__dropdown__list").hide();
    $(".search-block__dropdown__helper").show();
  });

  // меню
  $(".submenu-main > li > a").hover(function () {
    $(".submenu-block").removeClass("active");
    $(this).closest("li").find(".submenu-block").addClass("active");
  });

  // мобильное меню
  $(".js--mobile-menu").on("click", function (e) {
    e.preventDefault();
    if ($(window).width() > 767) {
      $(".submenu-block").removeClass("active");
      $(this).closest("li").find(".submenu-block").addClass("active");
    } else if ($(window).width() < 767) {
      $(this).toggleClass("active");
      $(this).closest("li").find(".submenu-block").slideToggle();
    }
  });

  // to top
  $(".to-top").on("click", function (e) {
    e.preventDefault();
    $("body,html").animate({
        scrollTop: 0,
      },
      400
    );
  });

  if ($(window).width() < 767) {
    $(".top-line__left .right-angle").on("click", function () {
      $(".top-line__left .submenu").removeClass("active");
      $(this).next(".submenu").addClass("active");
    });
    $(".mobile-close .close").on("click", function (e) {
      e.preventDefault;
      $(".submenu").removeClass("active");
    });
  }

  // tabs
  $(".js--tab").on("click", function (e) {
    e.preventDefault();

    let tabLink = $(this).data("tab");
    $(".js--tab").removeClass("active");
    $(this).addClass("active");

    $(".tab-section").removeClass("active");
    $("#" + tabLink).addClass("active");
  });

  // slider
  $(".slider-one").slick({
    dots: true,
    arrows: false,
  });
  $(".partners__list-slider").slick({
    slidesPerRow: 5,
    rows: 3,
    nextArrow: '<span class="next-slide"><svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.5" d="M1 0.999999L11.5 9.89282L1 18.7856" stroke="#25282B" stroke-linecap="round" stroke-linejoin="round"/></svg></span>',
    prevArrow: '<span class="prev-slide"><svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.25 21.5L0.75 11L11.25 0.5" stroke="#25282B" stroke-linecap="round" stroke-linejoin="round"/></svg></span>',
    responsive: [{
        breakpoint: 1023,
        settings: {
          slidesPerRow: 4,
          rows: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesPerRow: 3,
          rows: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesPerRow: 3,
          rows: 2,
        },
      },
    ],
  });
  $(".related-slider").slick({
    variableWidth: true,
    arrows: false,
    slidesToShow: 2,
    autoplay: true,
    responsive: [{
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        dots: true,
      },
    }, ],
  });

  $(".team-slider").slick({
    nextArrow: '<span class="next-slide"><svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.5" d="M1 0.999999L11.5 9.89282L1 18.7856" stroke="#25282B" stroke-linecap="round" stroke-linejoin="round"/></svg></span>',
    prevArrow: '<span class="prev-slide"><svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.25 21.5L0.75 11L11.25 0.5" stroke="#25282B" stroke-linecap="round" stroke-linejoin="round"/></svg></span>',
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  });

  $(".project-detail-item .team-detail__projects__item ").mouseenter(
    function () {
      $(this).closest(".project-detail-item").addClass("active");
      $(this)
        .closest(".project-detail-item")
        .find(".project-detail-item__content")
        .slideToggle();
    }
  );
  $(".project-detail-item__content").mouseleave(
    function () {
      $(this).closest(".project-detail-item").removeClass("active");
      $(this)
        .closest(".project-detail-item")
        .find(".project-detail-item__content")
        .slideToggle();
    }
  );

  input
  $(".input__field").change(function () {
    var $this = $(this);
    var $thisInput = $this.find("input");
    if ($this.val() !== "") {
      $this.addClass("input--filled");
    } else {
      $this.removeClass("input--filled");
    }
  });

  // textarea count
  (function () {
    let maxCount = 1000;

    $(".textarea").keyup(function () {
      var revText = this.value.length;

      if (this.value.length > maxCount) {
        this.value = this.value.substr(0, maxCount);
      }
      var cnt = revText;

      $(".count").html(cnt);
      // if(cnt <= 0){$(".count").html('0');}
      // else {$(".count").html(cnt);}
    });
  })();

  // input mask
  $("#phone").mask("+7(999) 999-9999");

  // popup
  $(".js--popup").on("click", function (e) {
    e.preventDefault();

    let id = $(this).data("popup");
    $("body").addClass("noscroll");
    $("#overlay").show();
    $(".popup").removeClass("active");
    $("#" + id).addClass("active");
  });
  $("#overlay, .close-popup").on("click", function (e) {
    e.preventDefault();

    $("body").removeClass("noscroll");
    $("#overlay").hide();
    $(".popup").removeClass("active");
  });

  $(".select")
    .on("click", ".placeholder", function () {
      var parent = $(this).closest(".select");
      if (!parent.hasClass("is-open")) {
        parent.addClass("is-open");
        $(".select.is-open").not(parent).removeClass("is-open");
      } else {
        parent.removeClass("is-open");
      }
    })
    .on("click", "ul>li", function () {
      var parent = $(this).closest(".select");
      parent.removeClass("is-open").find(".placeholder").text($(this).text());
      parent
        .find("input[type=hidden]")
        .attr("value", $(this).attr("data-value"));
    });
});