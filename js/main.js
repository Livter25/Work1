$(document).ready(function () {
    var link = $('.video__img');
    var menu = $('.statistic')


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
    
});