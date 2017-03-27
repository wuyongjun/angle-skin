/*!
 *
 * Angle - Bootstrap Admin App
 *
 * Version: 3.6
 * Author: @themicon_co
 * Website: http://themicon.co
 * License: https://wrapbootstrap.com/help/licenses
 *
 */

(function ($) {
  'use strict';

  if (typeof $ === 'undefined') { throw new Error('This site\'s JavaScript requires jQuery'); }

  // cache common elements
  var $win  = $(window);
  var $doc  = $(document);
  var $body = $('body');


  // Site Preloader
  // -----------------------------------

  NProgress.start();

  $('#header').waitForImages(function() {
      NProgress.done();
      $body.addClass('site-loaded');
  });

  // Init Writing Mode
  // -----------------------------------

  // Global RTL Flag
  window.modeRTL = false;
  // get mode from local storage
  modeRTL = !!$.localStorage.get('modeRTL');
  console.log('Site is in '+(modeRTL?'RTL':'LTR')+' mode.');


  // Show sticky topbar on scroll
  // -----------------------------------

  var stickyNavScroll;
  var stickySelector = '.navbar-sticky';

  // Setup functions based on screen
  if (matchMedia('(min-width: 992px), (max-width: 767px)').matches) {
    stickyNavScroll = function () {
      var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
      if (top > 40) $(stickySelector).stop().animate({'top': '0'});

      else $(stickySelector).stop().animate({'top': '-80'});
    };
  }

  if (matchMedia('(min-width: 768px) and (max-width: 991px)').matches) {
    stickyNavScroll = function () {
      var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
      if (top > 40) $(stickySelector).stop().animate({'top': '0'});

      else $(stickySelector).stop().animate({'top': '-120'});
    };
  }

  // Finally attach to events
  $doc.ready(stickyNavScroll);
  $win.scroll(stickyNavScroll);


  // Sticky Navigation
  // -----------------------------------

  $(function() {

    $('.main-navbar').onePageNav({
      scrollThreshold: 0.25,
      filter: ':not(.external)', // external links
      changeHash: true,
      scrollSpeed: 750
    });

  });


  // Video Background
  // -----------------------------------

  $(function() {

    if ( ! $.browser.mobile ) {

      var videoContainer = $('<div id="video-container"/>').prependTo($body);
      var videobackground = new $.backgroundVideo(
        // create a container
        videoContainer,
        {
          'align':    'centerXY',
          'width':    1280,
          'height':   720,
          'path':     'video/',
          'filename': 'video',
          'types':    ['webm', 'mp4']

      }).$videoEl.on('loadeddata', function(){
        $('#header').removeClass('novideo');
      });
    }

  });


  // Smooth Scroll
  // -----------------------------------
  var scrollAnimationTime = 1200,
      scrollAnimationFunc = 'easeInOutExpo',
      $root               = $('html, body');

  $(function(){
    $('.scrollto').on('click.smoothscroll', function (event) {

      event.preventDefault();

      var target = this.hash;

      // console.log($(target).offset().top)

      $root.stop().animate({
          'scrollTop': $(target).offset().top
      }, scrollAnimationTime, scrollAnimationFunc, function () {
          window.location.hash = target;
      });
    });

  });

  // Self close navbar on mobile click
  // -----------------------------------
  $(function(){
       var navMain = $("#navbar-main");
       var navToggle = $('.navbar-toggle');

       navMain.on('click', 'a', null, function () {
          if ( navToggle.is(':visible') )
            navMain.collapse('hide');
       });
   });


  // Wow Animation
  // -----------------------------------

  // setup global config
  window.wow = (
      new WOW({
      mobile: false
    })
  ).init();


  // Owl Crousel
  // -----------------------------------

  $(function () {

    $('#feedback-carousel').owlCarousel({
        rtl:              window.modeRTL,
        responsiveClass:  true,
        responsive: {
            0: {
                items: 1,
                nav:   false
            }
        }
    });

    $('#appshots').owlCarousel({
        rtl:             window.modeRTL,
        margin:          10,
        responsiveClass: true,
        responsive:      {
            0: {
                items: 1,
                nav:   false
            },
            500: {
                items: 2,
                nav:   false
            },
            1000: {
                items: 4,
                nav:   false,
                loop:  false
            }
        }
    });

  });


  // Nivo Lightbox
  // -----------------------------------
  $(function () {

    $('#appshots a').nivoLightbox({

      effect: 'fadeScale',                        // The effect to use when showing the lightbox
      theme: 'default',                           // The lightbox theme to use
      keyboardNav: true                           // Enable/Disable keyboard navigation (left/right/escape)

    });

  });

})(window.jQuery);