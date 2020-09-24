'use strict';

$(function() {
    $('.header__toggle').on('click' ,function() {
        $(this).toggleClass('active');
        $('.header__menu').toggleClass('open');
    });
});