const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    autoplay: {
        delay: 2000 // 자동 슬라이드 시작 대기 시간
    },
    loop: true,
    delay: 2000,
    slidesPerView: 1,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // And if we need scrollbar
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
});
swiper.on('touchStart', function () {
    // 사용자가 터치할 때 자동 슬라이드 멈춤
    swiper.autoplay.stop();
});
swiper.on('touchEnd', function () {
    // 사용자의 터치가 종료되면 잠시 후에 자동 슬라이드 다시 시작
    swiper.autoplay.start();
});
// Navigation 버튼 클릭 이벤트에 대한 이벤트 핸들러
swiper.on('slideNextTransitionStart slidePrevTransitionStart', function () {
    // Navigation 버튼 클릭시 자동 슬라이드 멈춤
    swiper.autoplay.stop();
});
swiper.on('slideNextTransitionEnd slidePrevTransitionEnd', function () {
    // Navigation 버튼 클릭 후 잠시 후에 자동 슬라이드 다시 시작
    swiper.autoplay.start();
});