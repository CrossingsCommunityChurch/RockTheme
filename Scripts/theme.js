console.log('loading theme js');

$(document).ready(function() {

    $('.card-list-filter .btn').click(function(e){
        e.preventDefault();
        $('.card-list-filter .btn').removeClass('active');
        $(this).toggleClass('active');
        $('.media-list').toggleClass('list');
    });

    $('.has-subnav-parent').hover(function(){
        $(this).find('.fa').toggleClass('fa-angle-up');
    });

    $('a[data-toggle="collapse"').click(function(){
        $(this).find('.fa-angle-down').toggleClass('fa-angle-up');
    });

    $('.dropdown-toggle').click(function(){
        $(this).find('.fa-caret-down').toggleClass('fa-caret-up');
    });

    $('.primary-locations h3 > a').click(function(){
        $('#locationsModal').removeClass('in').hide();
        $('.modal-backdrop').remove();
        $('body').removeClass('modal-open');
    });

    $('.toggle-locations, .mobile-slideout-close').click(function(e){
        e.preventDefault();
        $(this).add('.mobile-slideout.locations, .mobile-overlay').toggleClass('active');
    });

    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();

        if (scroll >= 140) {
            $('.primary-nav').addClass('fixed push');
        } else {
            $('.primary-nav').removeClass('fixed push sticky');
        }
    });
    
    //Init Animate on Scroll
    // For options on settings - https://github.com/michalsnik/aos
    AOS.init({
        easing: 'ease-in-out',
        duration: '1000'
    });

    let menuWidth = '30em';
    let windowSize = $( window ).width();

    if (windowSize < 992) {
        menuWidth = '75%';
    }

    $('.account-toggle').bigSlide({
        menu: '#account-menu',
        menuWidth: menuWidth,
        easyClose: true,
    }).click(function(e) {
        e.preventDefault();
        $('.primary-nav').addClass('sticky');
    });

    $('body').addClass('zoom');


    $('.open-search').click(function(e){
        e.preventDefault();
        $('.search-input').focus();
        $('.search-wrapper').addClass('open');
    });

    $('.search-close').click(function(e){
        e.preventDefault();
        $('.search-wrapper').removeClass('open');
    });

    $('.run-search').click(function(e) {
        e.preventDefault();
        let input = $('.search-wrapper .search-input').val();
        window.location.href = '/search/?Q=' + input;
    });

    $('.search-wrapper .search-input').keydown(function(event){
        if (event.key === 'Enter') {
            console.log('enter pressed')
            event.preventDefault();
            window.location.href = '/search/?Q=' + $(this).val();
        }
    })
});