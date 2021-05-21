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
      'for-emergencies': 'For Emergencies',
      'home': 'Home',
      'latendresse-research': 'Latendresse Research',
      'latendresse-research-2021': 'Latendresse Research 2021',
      'it-is-more-common': '• It is more common than preterm birth, diabetes, or high blood pressure.',
      'kritzia-phone': 'Kritzia (Spanish Speaking): 385-444-1022',
      'moms-wellbeing': 'Mom’s Wellbeing',
      'national-resources': 'National Resources',
      'study-team': 'Study Team',
      'graduate-research-assistant': 'Graduate Research Assistant',
      'research-assistants': 'Research Assistants:',
      'ryoko-phone': 'Ryoko (English only): 385-444-0511',
      'therapist': 'Therapist',
      'this-is-ppd': 'This is often called postpartum or perinatal depression and anxiety.  If not treated, depression and anxiety can contribute to health complications for both the mother and baby. The resources below can help you find support during your pregnancy and after birth.  Click the link below to find out how you are doing:',
      'women-experience-sadness': '• 1 in 5 women experience sadness, anxiety, and stress during pregnancy or after the birth of a baby.',

      'tepop-study': 'TEPOP STUDY',
      'tepop-study-subtitle': 'Telehealth for Pregnancy or Postpartum',
      'tepop-study-description-1': 'Depression and anxiety during and after pregnancy can lead to health problems for the mother and/or baby. This study explores one possible way to reduce symptoms-- a virtual support group that teaches skills on how to improve mental health.',
      'tepop-study-description-2': 'Our research team hopes to learn if the virtual groups, conducted using a secure telehealth platform, are effective in reducing symptoms. We also want to understand if telehealth groups are more accessible to women than in-person groups, since women are able to attend from the comfort of their own home.',
      'tepop-download-trifold': 'Download TEPOP Tri-Fold For More Information',
      'tepop-for-more-info': 'For more info: tepop@utah.edu',

      'team-our-amazing-team': 'OUR AMAZING TEAM',
      'team-principle-investigator': 'Principle Investigator',
      'team-associate-professor': 'Associate Professor, College of Nursing',
      'team-assistant-dean': 'Assistant Dean; Masters, DNP, DNP/PhD Programs, College of Nursing',
      'team-nursing-clinical-instructor': 'Nursing Clinical Instructor',
      'team-psychiatry-advanced-practice-clinician': 'Psychiatry-Advanced Practice Clinician',
      'team-behavioral-sciences-manager': 'Behavioral Sciences Manager',
      'team-perinatal-program-development': 'Perinatal Program Development',
      'team-university-neuropsychiatricinstitute': 'University Neuropsychiatric Institute',
      'team-associate-professor-maternal-fetal-medicine': 'Assistant Professor Maternal Fetal Medicine Department of Obstetrics and Gynecology University of Utah',
      'team-co-investigator': 'Co-Investigator',
      'team-licensed-psychologist': 'Licensed Psychologist',
      'team-assistant-directory-psychology': 'Assistant Director of Psychology & Wellness in Athletics',
      'team-tepop-program-manager': 'TEPOP Program Manager',
      'team-database-manager': 'Database Manager',
      'team-analyst': 'Analyst',
      'team-clinical-social-worker': 'Clinical Social Worker',
      'team-professor': 'Professor',
      'team-department-behavioral-sciences-health-education': 'Department of Behavioral Sciences and Health Education',
      'team-rollins-school-public-health': 'Rollins School of Public Health',
      'team-emory-university': 'Emory University',

      'advisor': 'Advisor',
      'start-survey': 'START SURVEY',
      'interested-in-a-study': 'Interested in a perinatal and postpartum mental health study?',
      'maternal-mental-health-resources': 'MATERNAL MENTAL HEALTH RESOURCES',
      'postpartum-support-international': 'Postpartum Support International Utah',
      'postpartum-support-international-description': "Postpartum Support International Utah (PSI Utah) brings together providers, professionals and mothers with the goal of improving prevention, detection and treatment of maternal mental health conditions.",
      'the-emily-effect': 'The Emily Effect',
      'the-emily-effect-description': "The Emily Effect Foundation provides resources to families and support for women suffering from perinatal mood disorders.",
      'team-study-coordinator': 'Study Coordinator',
      'team-professor-applied-statistics': 'Professor and Director of Applied Statistics',
      'team-group-facilitator': 'Group Facilitator'

    },
    'es': {
      'current-studies': 'ESTUDIOS ACTUALES',
      'did-you-know': '¿Sabía usted que?',
      'for-emergencies': 'Para Emergencias',
      'home': 'INICIO',
      'latendresse-research': 'Investigaciones Latendresse',
      'latendresse-research-2021': 'Investigaciones Latendresse 2021',
      'moms-wellbeing': "Bienestar de Mamá",
      'national-resources': 'Recursos al nivel Nacional',
      'it-is-more-common': '• Es más común que el parto prematuro, la diabetes o la presión arterial alta.',
      'kritzia-phone': 'Kritzia (Espanol o Ingles): 385-444-1022',
      'study-team': 'EQUIPO DE ESTUDIO',
      'graduate-research-assistant': 'Asistente de Investigacion',
      'research-assistants': 'Asistente de Investigacion:',
      'ryoko-phone': 'Ryoko (solo Ingles): 385-444-0511',
      'therapist': 'Terapeuta/Terapista',
      'this-is-ppd': 'Esto a menudo es conocido como depresión y ansiedad posparto o perinatal. Si no se tratan, la depresión y la ansiedad pueden contribuir a complicaciones de salud tanto para la madre como para el bebé. Los recursos a continuación pueden ayudarla a encontrar apoyo durante su embarazo y después del nacimiento. Haga clic en el enlace de abajo para saber cómo está usted:',
      'women-experience-sadness': '• 1 de cada 5 mujeres experimenta tristeza, ansiedad y estrés durante el embarazo o después del nacimiento de un bebé.',

      'tepop-study': 'ESTUDIO TEPOP',
      'tepop-study-subtitle': 'Telesalud para Embarazo o Posparto',
      'tepop-study-description-1': 'La depresión y la ansiedad durante y después del embarazo pueden provocar problemas de salud para la madre y / o el bebé. Este estudio explora una forma posible de reducir los síntomas: un grupo de apoyo virtual que enseña habilidades sobre cómo mejorar la salud mental.',
      'tepop-study-description-2': 'Nuestro equipo de investigación espera saber si los grupos virtuales, realizados mediante una plataforma de telesalud segura, son eficaces para reducir los síntomas. También queremos entender si los grupos de telesalud son más accesibles para las mujeres que los grupos presenciales, ya que las mujeres pueden asistir desde la comodidad de su propio hogar.',
      'tepop-download-trifold': 'Descargue TEPOP Tri-Fold para obtener más información',
      'tepop-for-more-info': 'For more info: tepop@utah.edu',

      'team-our-amazing-team': 'NUESTRO MARAVILLOSO EQUIPO',
      'team-principle-investigator': 'Investigadora Directora Principal',
      'team-associate-professor': 'Profesora Asociada, Escuela de Enfermeria',
      'team-assistant-dean': 'Decano Asistente; Masters, DNP, DNP/PhD Programs, Escuela de Enfermeria',
      'team-nursing-clinical-instructor': 'Instructora Clinica de Enfermeria',
      'team-psychiatry-advanced-practice-clinician': 'Médico de práctica avanzada en psiquiatría',
      'team-behavioral-sciences-manager': 'Administrador(a) de Ciencias Comportamentales',
      'team-perinatal-program-development': 'Programa de Desarrollo Perinatal',
      'team-university-neuropsychiatricinstitute': 'Instituto Universitario de Neuropsiquiatría',
      'team-associate-professor-maternal-fetal-medicine': 'Profesora asistente Departamento de Obstetricia y Ginecología de Medicina Materno Fetal Universidad de Utah',
      'team-co-investigator': 'Co-Investigadora ',
      'team-licensed-psychologist': 'Psicóloga licenciada',
      'team-assistant-directory-psychology': 'Subdirectora de Psicología y Bienestar en Atletismo',
      'team-tepop-program-manager': 'Administradora del Programa de TEPOP',
      'team-database-manager': 'Administrador de Base de Datos',
      'team-analyst': 'Analista',
      'team-clinical-social-worker': 'Trabajador Social Clinico',
      'team-professor': 'Profesor',
      'team-department-behavioral-sciences-health-education': 'Departamento de Ciencias Comportamentales e Educacion de Salud',
      'team-rollins-school-public-health': 'Escuela de Salud Publico Rollins',
      'team-emory-university': 'Universidad de Emory'
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
