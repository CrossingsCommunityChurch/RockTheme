console.log('loading theme js');

$(document).ready(function() {

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
            $('.primary-nav').addClass('fixed');
        } else {
            $('.primary-nav').removeClass('fixed');
        }
    });
    
    //Init Animate on Scroll
    // For options on settings - https://github.com/michalsnik/aos
    AOS.init({
        easing: 'ease-in-out',
        duration: '1000'
    });

});