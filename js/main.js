$(document).ready(function () {
    var link = $('.video__img');
    var menu = $('.statistic');


    link.click(function (e) { 
        e.preventDefault();
        menu.toggleClass('section--active')
    
    });
    
    var player;
    function videoPlay(event) {
        event.target.playVideo();
        };
    $('.video__img').on('click', function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
        height: '100%',
        width: '100%',
        videoId: '69MkvKrraC0',
        events: {
            'onReady': videoPlay,
        }
        });
    });
        var scrolled;
    window.onscroll = function() {
        scrolled = window.pageYOffset || document.documentElement.scrollTop;
        if(scrolled > 0){
            $(".header").css({"background": "white"})
        }
        if(300 > scrolled){
            $(".header").css({"background": "transparent"})         
        }

    };
    var swiper = new Swiper('.swiper-cases', {
        navigation: {
          nextEl: '.swiper-button-next-cases',
          prevEl: '.swiper-button-prev-cases',
        },
      });
    var swiper = new Swiper('.swiper-client', {
        navigation: {
          nextEl: '.swiper-button-next-client',
          prevEl: '.swiper-button-prev-client',
        },
    });
    var swiper = new Swiper('.swiper-news', {
        navigation: {
          nextEl: '.swiper-button-next-news',
          prevEl: '.swiper-button-prev-news',
        },
    });
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
    $("#boxmenu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
    var link = $('.box-link');
    var meni = $('.boxing')


    link.click(function (e) { 
        e.preventDefault();
        link.toggleClass('box-link_active');
        meni.toggleClass('boxing__active')
    
    });
    var modal = $('.modal'),
      modalbtn = $('[data-toggle=modal]'),
      closebtn = $('.modal__close')
      
  
    modalbtn.on('click', function() {
      $(modal).toggleClass('modal--visible');
      
    });
    closebtn.on('click', function() {
      $(modal).toggleClass('modal--visible');
      
    });
    //валидация формы 
  $('.modal__form').validate({
      
      errorClass: "invalid__price",
      errorElement: "em",
      rules: {
        // simple rule, converted to {required:true}
        userName: {
          required: true,
          minlength: 2,
          maxlength: 15,
          
        },
        userPhone: {
          required: true,
          minlength: 11,
          
          
        },
        userPhone: "required",
        
        
      },
      messages: {
        userName:{
          required: "Имя обязательно ",
          minlength: jQuery.validator.format("Имя не короче {0} букв "),
          maxlength: jQuery.validator.format("Имя не длинее {0} букв ")
        } ,
        userPhone:{
          required: "Телефон обязательно",
          minlength: jQuery.validator.format("Номер не короче {0} цифр "),
        }
      }

  });
  $('[type=tel]').mask('+7(000)-000-00-00', {placeholder: "Ваш номер телефона"});

  $('.form__price').validate({
        errorClass: "invalid__price",
        errorElement: "em",
        rules: {
            // simple rule, converted to {required:true}
            userName: {
                required: true,
                minlength: 2,
                maxlength: 15,
                
            },
            userMasange: "required",
            UserWebsite: "required",
            // compound rule
            userEmail: {
                required: true,
                email: true
            }
        },
        messages: {
            userName:{
                required: "Имя обязательно ",
                minlength: jQuery.validator.format("Имя не короче {0} букв "),
                maxlength: jQuery.validator.format("Имя не длинее {0} букв ")
            } ,
            userMasange:{
                required: "Сообщение обязательно",
            },
            userEmail: {
                required: "Обязателно укажите Email",
                email: "Введите в формате sdfsd@asdasd.com"
                },
            UserWebsite: {
                required: "Обязателно укажите ваш сайт",
                },
        }

  });
  $('.question__form').validate({

    errorClass: "invalid",
    errorElement: "em",
    rules: {
    // simple rule, converted to {required:true}
    userName: {
        required: true,
        minlength: 2,
        maxlength: 15,
        
    },
    userMasange: "required",
    userPhone: "required",
    // compound rule
    userEmail: {
        required: true,
        email: true
    }
    },
    messages: {
    userName:{
        required: "Имя обязательно ",
        minlength: jQuery.validator.format("Имя не короче {0} букв "),
        maxlength: jQuery.validator.format("Имя не длинее {0} букв ")
    } ,
    userMasange:{
        required: "Сообщение обязательно",
    },
    userEmail: {
        required: "Обязателно укажите Email",
        email: "Введите в формате sdfsd@asdasd.com"
        },
    userPhone:{
        required: "Телефон обязательно",
        minlength: jQuery.validator.format("Номер не короче {0} цифр "),
        },
    }

    });
        jQuery(function($){
            $('a[href*="#"]').on('click.smoothscroll', function( e ){
            var hash    = this.hash, _hash   = hash.replace(/#/,''), theHref = $(this).attr('href').replace(/#.*/, '');
            if( theHref && location.href.replace(/#.*/,'') != theHref ) return;
            var $target = _hash === '' ? $('body') : $( hash + ', a[name="'+ _hash +'"]').first();
            if( ! $target.length ) return;
            e.preventDefault();
            $('html, body').stop().animate({ scrollTop: $target.offset().top - 0 }, 900, 'swing', function(){
            window.location.hash = hash;
            });
            });
        });

  

        
});