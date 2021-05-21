(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // all <a> tags containing a certain rel=""
  $( ".nav-link" ).click(function(e) {
    e.preventDefault();

    var params = window.location.search,
        dest = $(this).attr('href') + params;

    // in my experience, a short timeout has helped overcome browser bugs
    window.setTimeout(function() {
        window.location.href = dest;
    }, 100);
  });

  var set_locale_to = function(locale) {
    if (locale) {
      $.i18n().locale = locale;
    }
  };

  $.i18n().load( {
    'en': {
      'current-studies': 'Current Studies',
      'did-you-know': 'Did you know?',
      'home': 'Home',
      'it-is-more-common': '• It is more common than preterm birth, diabetes, or high blood pressure.',
      'moms-wellbeing': 'Mom’s Wellbeing',
      'study-team': 'Study Team',
      'this-is-ppd': 'This is often called postpartum or perinatal depression and anxiety.  If not treated, depression and anxiety can contribute to health complications for both the mother and baby. The resources below can help you find support during your pregnancy and after birth.  Click the link below to find out how you are doing:',
      'women-experience-sadness': '• 1 in 5 women experience sadness, anxiety, and stress during pregnancy or after the birth of a baby.'
    },
    'es': {
      'did-you-know': '¿Sabía usted que?',
      "moms-wellbeing": "Bienestar de Mamá",
      'it-is-more-common': '• Es más común que el parto prematuro, la diabetes o la presión arterial alta.',
      'this-is-ppd': 'Esto a menudo es conocido como depresión y ansiedad posparto o perinatal. Si no se tratan, la depresión y la ansiedad pueden contribuir a complicaciones de salud tanto para la madre como para el bebé. Los recursos a continuación pueden ayudarla a encontrar apoyo durante su embarazo y después del nacimiento. Haga clic en el enlace de abajo para saber cómo está usted:',
      'women-experience-sadness': '• 1 de cada 5 mujeres experimenta tristeza, ansiedad y estrés durante el embarazo o después del nacimiento de un bebé.'
    }
  } ).done(function() {
      set_locale_to(url('?locale'));
      History.Adapter.bind(window, 'statechange', function(){
        set_locale_to(url('?locale'));
      });
      $('.switch-locale').on('click', 'a', function(e) {
        e.preventDefault();
        History.pushState(null, null, "?locale=" + $(this).data('locale'));
        $('body').i18n();
      });
      });
  $('body').i18n();

})(jQuery); // End of use strict
