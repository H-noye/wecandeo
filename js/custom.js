$(function () {
    AOS.init({

    })

    const mediaQuery = window.matchMedia('(max-width: 768px)');
    mediaQuery.addEventListener('change', (e) => {
        if (e.matches) {
            console.log('화면 너비가 768px 이하로 변경되었습니다.');
            $(window).scroll(function () {
                var scroll = $(window).scrollTop();

                if (scroll > 0) {
                    $('header').addClass('none');
                } else {
                    $('header').removeClass('none');
                }
            });
        } else {
            console.log('화면 너비가 768px 초과로 변경되었습니다.');
            $(window).scroll(function () {
                var scroll = $(window).scrollTop();

                if (scroll > 0) {
                    $('header').addClass('on');
                } else {
                    $('header').removeClass('on');
                }
            });
        }
    });

    $('.gnb>ul>li>a').on('click', function (e) {
        if ($('.gnb').hasClass('on') && $(this).next().is('.sub_menu')) {
            e.preventDefault();
            $('.gnb>ul>li>.sub_menu').stop().slideUp();
            $(this).next().stop().slideToggle();
        };
    });

    $(window).on('resize', function () {
        let ww = $(window).width();
        if (ww > 768) {
            $('.gnb').removeClass('on');
            $('.gnb>ul>li .sub_menu').removeAttr('style');
        }
    })

    $('#header .hd_wrap .inner>button').on('click', function () {
        $('#header').toggleClass('on')
        $('#header .hd_wrap .gnb').toggleClass('on')
    })

    $('#header .hd_wrap .gnb > ul > li').mouseenter(function () {
        // 현재 li 항목에 'sub' 클래스가 있으면 'on' 클래스를 추가
        if ($(this).hasClass('sub')) {
            $('#header .hd_wrap').addClass('on');
        }
    });

    $('#header .hd_wrap .gnb > ul > li').mouseleave(function () {
        // 모든 li 항목에서 떠날 때 'on' 클래스를 제거
        $('#header .hd_wrap').removeClass('on');
    });


    $('.contact').on('click', function () {
        $('.contact ul').toggleClass('on')
    });
});

$(function () {
    const main_visual_slide = new Swiper('.main_visual_slide', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: '.main_visual .arrows .next',
            prevEl: '.main_visual .arrows .prev',
        },
        centeredSlides: true,
        breakpoints: {
            548: {
                slidesPerView: 2,
                centeredSlides: false,
            },

            1170: {
                slidesPerView: 3,
                centeredcenteredSlides: true,
            },
        },
    });
})