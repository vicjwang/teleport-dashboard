  WebFontConfig = {
    google: { families: [ 'Work+Sans:300,400,600:latin' ] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();

var $w = $(window);
var winHeight = $w.height();
var tutorial; // for debugging

$(document).ready(function() {
  // $("body").addClass("no-scroll");
  // drawPreload();

  $w.scroll(triggerFocus);
  $d = $(".dispatch__tutorial img");
  $r = $(".receive__tutorial img");
  function triggerFocus() {
    var h = $w.scrollTop();
    // $d.css({'transform': 'translate3d(-50%,'+h/8+'px,0)'});
    // $r.css({'transform': 'translate3d(-50%,'+(150 + parseInt(h/8))+'px,0)'});

  }

  $(".dispatch__tutorial > ul > li, .receive__tutorial > ul > li").click(function(e) {
    e.preventDefault();
    var $t = $(this).toggleClass("active");
    $(".dispatch__tutorial > ul > li, .receive__tutorial > ul > li").not($t).removeClass("active");
  });

  $("ul.usecase__menu > li").click(function(e) {
    e.preventDefault();
    $("ul.usecase__menu > li, ul.usecase__details > li").removeClass("active");
    var $t = $(this).addClass("active");
    $("ul.usecase__menu").css({'transform': 'translate3d('+($w.width()/2 - $t.position().left - $t.width()/2 - 16)+'px,0,0)'});
    $("ul.usecase__details > li").eq($t.index()).addClass("active");
  });

  $("ul.usecase__menu > li.active").trigger("click");

});

function initialize() {
  // imagesLoaded( document.querySelector('#intro'), function( instance ) {
  //   $("#preload").fadeOut();
  //   $("#intro").addClass("focus");
  //   $("body").removeClass("no-scroll");
  // });
}


