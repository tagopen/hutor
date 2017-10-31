(function($) {
  "use strict"; // Start of use strict

  // Old browser notification
  $(function() { 
    $.reject({
      reject: {
        msie: 9
      },
      imagePath: 'img/icons/jReject/',
      display: [ 'chrome','firefox','safari','opera' ],
      closeCookie: true,
      cookieSettings: {
        expires: 60*60*24*365
      },
      header: 'Ваш браузер устарел!',
      paragraph1: 'Вы пользуетесь устаревшим браузером, который не поддерживает современные веб-стандарты и представляет угрозу вашей безопасности.',
      paragraph2: 'Пожалуйста, установите современный браузер:',
      closeMessage: 'Закрывая это уведомление вы соглашаетесь с тем, что сайт в вашем браузере может отображаться некорректно.',
      closeLink: 'Закрыть это уведомление',
    });
  });

  // Menu anchor scroll
  $(function() {
    $(".navbar").on("click",".nav__point a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
      top = $(id).offset().top;
      $('body,html').animate({scrollTop: top -$('.navbar').outerHeight()+180}, 1500);
    });
  });

  // Header numbers click
  $(function() {
    $('.phone__group').click( function () {
      $('.phone__link .fa').toggleClass('phone__icon--hidden');
      $('.phone__slide').toggleClass('phone__slide--visibility');
    });
  });  

  // Slick slider initialize
  $(function() {

    $('.project__slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      adaptiveHeight: true,
      swipeToSlide: '15',
      asNavFor: '.project__slider--small'
    });

    $('.project__slider--small').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.project__slider',
      dots: false,
      arrows: true,
      centerPadding: '10',
      centerMode: true,
      focusOnSelect: true,
      prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
      nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><i class="fa fa-angle-right" aria-hidden="true"></i></button>'
    });

    $('.catalog__slider').not('.slick-initialized').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      infinite: true,
      dots: false,
      swipeToSlide: '15',
      adaptiveHeight: true,
      prevArrow: '<button type="button" data-role="none" class="slick-prev arrow-group" aria-label="Previous" tabindex="0" role="button"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
      nextArrow: '<button type="button" data-role="none" class="slick-next arrow-group" aria-label="Next" tabindex="0" role="button"><i class="fa fa-angle-right" aria-hidden="true"></i></button>'
    });

    $(window).resize(function() {
      $('.catalog__slider').slick('resize');
    });
  });
 
  // Scheme info animation
  $(function() {
    if( $( window ).width() >= 768 ) {
      $('.scheme__icon, .scheme__info').hover( function() {
        $(this).parent().toggleClass('scheme__btn--active');
      });
    }
  });

  // Match Height
  $(function() {

    $('.work').matchHeight({
      byRow: true,
      property: 'height',
      target: null,
      remove: false
    });

    if( $( window ).width() >= 760 ) {

      $('.create__name').matchHeight({
        byRow: true,
        property: 'height',
        target: null,
        remove: false
      });
      $('.create__box').matchHeight({
        byRow: true,
        property: 'height',
        target: null,
        remove: false
      });
      $('.process__box').matchHeight({
        byRow: false,
        property: 'height',
        target: null,
        remove: false
      });
      $('.catalog__name').matchHeight({
        byRow: true,
        property: 'height',
        target: null,
        remove: false
      });
    }
  });

  // Fancybox
  $(function() { 
    $("a.fancyimage").fancybox({
      scrolling : 'no',
      closeBtn : false,
      afterShow: function() {
        $('.slick-slider').slick('reinit');
      },
    }); 

    $('.close--fancybox').click(function(e){
        e.preventDefault();
        $.fancybox.close();
    });
  }); 

  // Sibassa modal
  $(function() { 
    var interval = 20 * 1000,
        theInterval;

    theInterval = setTimeout(function() {
      $('#popup').modal('show');
    }, interval);
  }); 

  // Gallery Btn show all 
  $('.contento__show').on('click', function () {
    $('.gallery__column').removeClass('gallery__column--hidden');
    $('.contento__show').hide();
  }); 


$(document).ready(function(){
  // Add minus icon for collapse element which is open by default
  $(".collapse.in").each(function(){
    $(this).siblings(".panel-heading").find(".panel__ic").addClass("minus");
  });
  
  // Toggle plus minus icon on show hide of collapse element
  $(".collapse").on('show.bs.collapse', function(){
    $(this).parent().find(".panel__ic").addClass("minus");
  }).on('hide.bs.collapse', function(){
    $(this).parent().find(".panel__ic").removeClass("minus");
  });
});


})(jQuery); // End of use strict