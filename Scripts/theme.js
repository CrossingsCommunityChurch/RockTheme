//console.log('loading theme js');

$(document).ready(function() {

    //Init Animate on Scroll
    // For options on settings - https://github.com/michalsnik/aos
    AOS.init({
        easing: 'ease-in-out',
        duration: '1000'
    });

    $('.card-list-filter .btn').click(function(e) {
        e.preventDefault();
        $('.card-list-filter .btn').removeClass('active');
        $(this).toggleClass('active');
        $('.media-list').toggleClass('list');
    });

    $('.has-subnav-parent').hover(function() {
        $(this).find('.fa-angle-down').toggleClass('fa-angle-up');
    });

    $('a[data-toggle="collapse"]').click(function() {
        $(this).find('.fa-angle-down').toggleClass('fa-angle-up');
    });

    $('.dropdown-toggle').click(function() {
        $(this).find('.fa-caret-down').toggleClass('fa-caret-up');
    });

    $('.primary-locations h3 > a').click(function() {
        $('#locationsModal').removeClass('in').hide();
        $('.modal-backdrop').remove();
        $('body').removeClass('modal-open');
    });

    $('.mobile-slideout-close').click(function(e) {
        e.preventDefault();
        $('.mobile-nav-bar-item').removeClass('active');
        $('.mobile-slideout, .mobile-overlay').removeClass('active');
    })

    $('.toggle-locations').click(function(e) {
        e.preventDefault();
        $('.mobile-nav-bar-item').removeClass('active');
        $(this).add('.mobile-slideout, .mobile-overlay').removeClass('active');
        $(this).add('.mobile-slideout.locations, .mobile-overlay').addClass('active');
    });

    $('.toggle-media').click(function(e) {
        e.preventDefault();
        $('.mobile-nav-bar-item').removeClass('active');
        $(this).add('.mobile-slideout, .mobile-overlay').removeClass('active');
        $(this).add('.mobile-slideout.media, .mobile-overlay').addClass('active');
    });

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 140) {
            $('.primary-nav').addClass('fixed');
        } else {
            $('.primary-nav').removeClass('fixed');
            // $('.primary-nav').removeAttr('style');
        }
    });

    let menuWidth = '30em';
    let windowSize = $(window).width();

    if (windowSize < 992) {
        menuWidth = '75%';
    }

    $('.account-toggle').bigSlide({
        menu: '#account-menu',
        menuWidth: menuWidth,
        easyClose: true,
    }).click(function(e) {
        e.preventDefault();
        $('#login').addClass('active');
        // $('.primary-nav').addClass('sticky');
        // $('.primary-nav').css('left', '30em');
    });

    $('#close-left-arrow').bigSlide({
        menu: '#account-menu',
        menuWidth: menuWidth,
        easyClose: true,
    }).click(function(e) {
        e.preventDefault();
        $('#account-menu').css('left', '-30em');
        $('#login').removeClass('active');
    });

    $('body').addClass('zoom');


    $('.open-search').click(function(e) {
        e.preventDefault();
        $('.search-input').focus();
        $('.search-wrapper').addClass('open');
        $('.mobile-navbar').addClass('close');
        $('html').addClass('hide-overflow');
    });

    $('.search-close').click(function(e) {
        e.preventDefault();
        $('.search-wrapper').removeClass('open');
        $('.mobile-navbar').removeClass('close');
        $('html').removeClass('hide-overflow');
    });

    $('.run-search').click(function(e) {
        e.preventDefault();
        let input = $('.search-wrapper .search-input').val();
        window.location.href = '/search/?Q=' + input;
    });

    $('.search-wrapper .search-input').keydown(function(event) {
        if (event.key === 'Enter') {
            console.log('enter pressed')
            event.preventDefault();
            window.location.href = '/search/?Q=' + $(this).val();
        }
    })

    $(document).on('click', '[data-toggle="tab-cc"]', function(e) {
        e.preventDefault();
        console.log('wes');
        $(this).closest('.nav-tabs').find('li').removeClass('active');
        $(this).parent('li').addClass('active');
        let tab = $(this).attr('href');
        console.log(tab);
        $(this).closest('.zone-content').find('.tab-pane').removeClass('active');
        $(this).closest('.zone-content').find(tab).addClass('active');
    });

    //Microsite Stuff
    var offset = $("#zone-pageheading").outerHeight(true) - 140;
    console.log(offset);
    $(".navbar.affix-navbar").affix({ offset: { top: offset } });

    function isIE() {
        // IE 10 and IE 11
        return /Trident\/|MSIE/.test(window.navigator.userAgent);
    }

    function showBrowserAlert() {
        if (document.querySelector('.unsupported-browser')) {
            var d = document.getElementsByClassName('unsupported-browser');

            var is_IE = isIE();

            if (is_IE) {
                d[0].innerHTML = '<div class="alert alert-info text-center" style="margin-bottom: 0;"><strong>Unsupported Browser</strong> This website will offer limited functionality in this browser. We only support the recent versions of major browsers like Chrome, Firefox, Safari, and Edge.</div>';
                d[0].style.display = 'block';
            }
        }
    };

    showBrowserAlert();
});