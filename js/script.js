$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__menu').toggleClass('active');
    })
})

window.onscroll = function showHeader() {
    var header = document.querySelector('.header');
    if (window.pageYOffset > 1) {
        header.classList.add('header_active');
    } else {
        header.classList.remove('header_active');
    }
}

new Swiper('.review__slider', {
    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    simulateTouch: false,
    spaceBetween: 50,
});