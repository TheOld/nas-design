/*!
MAIN SCRIPT : 
URL ........... 
VERSION ....... 0.0.1
Github ........ 
AUTHORS ....... Leandro Rodrigues

*/

var detailsOnly = false;

$(document).ready(function () {


    $('#techiniques-n-tools').mixItUp({
        layout: {
            display: 'flex'
        },

        animation: {
            duration: 260,
            effects: 'fade translateZ(-360px) stagger(34ms)',
            easing: 'cubic-bezier(.19,1,.22,1)'
        }
    });

    var $startIconGroup = $('#start-icon-anchor');

    $($startIconGroup).velocity({ translateX: "250px", translateY: "-80px", scale: 2 }, { duration: 0 }, customEasing);


    var customEasing = [.19, 1, .22, 1];

    $('#dashed-path-group').velocity('transition.fadeIn', { duration: 780, delay: 120 }, customEasing);

    $('.logotype').velocity('transition.fadeIn', { duration: 1500, delay: 600 }, customEasing);




    var $puzzleIcon = $("#puzzle-icon-group"),
    $wrenchIcon = $("#wrench-icon-group"),
    $warningIcon = $("#warning-icon-group"),
    $searchIcon = $("#search-icon-group"),
    $peopleIcon = $("#people-icon-group");



    $.Velocity.RunSequence([
   { elements: $warningIcon, properties: 'transition.expandIn', options: { duration: 220, easing: customEasing } },
   { elements: $peopleIcon, properties: 'transition.expandIn', options: { duration: 220, easing: customEasing } },
   { elements: $wrenchIcon, properties: 'transition.expandIn', options: { duration: 220, easing: customEasing } },
   { elements: $puzzleIcon, properties: 'transition.expandIn', options: { duration: 220, easing: customEasing } },
   { elements: $searchIcon, properties: 'transition.expandIn', options: { duration: 220, easing: customEasing } }

    ]);



    $('.toggle-menu').click(function () {
        if (!$('#main-menu').is(':visible')) {
            $('#main-menu').velocity('transition.slideDownIn',
                { duration: 260, delay: 120 },
                [200, 15]
              );


            $('#menu-list li').velocity('transition.perspectiveDownIn', { duration: 260, stagger: 40, delay: 240 }, customEasing);

        } else {
            $('#main-menu').velocity('transition.slideUpOut', { duration: 180 }, customEasing);
            $('#menu-list li').velocity({ opacity: 0 }, { duration: 0, display: 'none' });
        }

    });

    $('a[href*="#"]:not([href="#"])').click(function () {

        $('#main-menu').velocity('transition.slideUpOut', { duration: 180 }, customEasing);
        $('#menu-list li').velocity({ opacity: 0 }, { duration: 0, display: 'none' });

        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);

                return false;
            }
        }



    });

    //start guide pulse
    const pulse = setInterval(function () {

        var $startIcon = $('#start-circle');

        $.Velocity.RunSequence([
           { elements: $startIcon, properties: { scale: 1.02 }, options: { duration: 475, easing: 'linear' } },
           { elements: $startIcon, properties: { scale: 1 }, options: { duration: 475, easing: 'linear', sequenceQueue: true } }
        ]);
    }, 950);

    $('#start-icon-anchor').click(function () {

        //icon vars
        var $actGroup = $('#act-icon-anchor'),
            $doGroup = $('#do-icon-anchor'),
            $feelGroup = $('#feel-icon-anchor');


        //path vars
        //#path-start-feel-group, #path-feel-act-group, #path-do-act-group, #path-act-do-group
        var $pathStart = $('#path-start-feel-group'),
            $pathFeel = $('#path-feel-act-group'),
            $pathAct = $('#path-act-do-group'),
            $pathDo = $('#path-do-act-group');


        $.Velocity.RunSequence([

           { elements: $startIconGroup, properties: { translateX: 0, translateY: 0, scale: 1 }, options: { duration: 260, easing: customEasing } },
           //path start
           { elements: $pathStart, properties: 'transition.fadeIn', options: { duration: 80, easing: 'easeOut', sequenceQueue: true } },

           { elements: $feelGroup, properties: 'transition.expandIn', options: { duration: 220, easing: customEasing, sequenceQueue: true } },
           //path feel
           { elements: $pathFeel, properties: 'transition.fadeIn', options: { duration: 80, easing: 'easeOut', sequenceQueue: false } },

           { elements: $actGroup, properties: 'transition.expandIn', options: { duration: 220, easing: customEasing, sequenceQueue: true } },
           //path act
           { elements: $pathAct, properties: 'transition.fadeIn', options: { duration: 80, easing: 'easeOut', sequenceQueue: false } },


           { elements: $doGroup, properties: 'transition.expandIn', options: { duration: 220, easing: customEasing, sequenceQueue: true } },
           //path do
           { elements: $pathDo, properties: 'transition.fadeIn', options: { duration: 80, easing: 'easeOut', sequenceQueue: false } },

           { elements: $('#info-icon'), properties: 'transition.fadeIn', options: { duration: 120, easing: 'easeOut', sequenceQueue: true } }
        ]);

        clearInterval(pulse);
    });

    $('#feel-icon-anchor').click(function () {
        if (!$('.feel a').is(':visible')) {
            $('.feel a').velocity('transition.slideDownIn', { duration: 260, stagger: 40, display: 'flex' }, customEasing);
            $('#feel-icon-bg').addClass('opaque');
        } else {
            $('.feel a').velocity('transition.slideUpOut', { duration: 200, stagger: 40 }, customEasing);
            $('#feel-icon-bg').removeClass('opaque');
        }

    });

    $('#act-icon-anchor').click(function () {
        if (!$('.act a').is(':visible')) {
            $('.act a').velocity('transition.slideUpIn', { duration: 260, stagger: 40, display: 'flex' }, customEasing);
            $('#act-bg').addClass('opaque');
        } else {
            $('.act a').velocity('transition.slideDownOut', { duration: 200, stagger: 40 }, customEasing);
            $('#act-bg').removeClass('opaque');
        }

    });

    $('#do-icon-anchor').click(function () {
        if (!$('.do a').is(':visible')) {
            $('.do a').velocity('transition.slideUpIn', { duration: 260, stagger: 40, display: 'flex' }, customEasing);
            $('#do-bg, #do-bg-1, #do-bg-2').addClass('opaque');
        } else {
            $('.do a').velocity('transition.slideDownOut', { duration: 200, stagger: 40 }, customEasing);
            $('#do-bg, #do-bg-1, #do-bg-2').removeClass('opaque');
        }

    });

    // #region FEEL ACTIONS
    $('#feel-sense').click(function (e) {
        //$('.feel-modal').removeClass('hidden');
        showModal($('.sense-modal'));

        e.preventDefault();
    });
    $('#feel-verify').click(function (e) {
        //$('.feel-modal').removeClass('hidden');
        showModal($('.verify-modal'));
        e.preventDefault();
    });
    $('#feel-limit').click(function (e) {
        //$('.feel-modal').removeClass('hidden');
        showModal($('.limit-modal'));
        e.preventDefault();
    });
    // #endregion

    // #region ACT ACTIONS
    $('#act-conception').click(function (e) {
        //$('.feel-modal').removeClass('hidden');
        showModal($('.conception-modal'));

        e.preventDefault();
    });
    $('#act-presentation').click(function (e) {
        //$('.feel-modal').removeClass('hidden');
        showModal($('.presentation-modal'));

        e.preventDefault();
    });
    $('#act-feedback').click(function (e) {
        //$('.feel-modal').removeClass('hidden');
        showModal($('.feedback-modal'));
        e.preventDefault();
    });


    // #endregion

    // #region DO ACTION

    $('#do-close').click(function (e) {
        //$('.feel-modal').removeClass('hidden');
        showModal($('.do-close-modal'));

        e.preventDefault();
    });
    $('#do-cicle').click(function (e) {
        //$('.feel-modal').removeClass('hidden');
        showModal($('.do-cicle-modal'));

        e.preventDefault();
    });

    // #endregion


    $('.tool-link').off().click(function (e) {

        e.preventDefault();

        var $tool = $(this).data('id');
        var $parentModal = $("." + $(this).data('modal'));
        var $toolDetailsContainer = $('.tool-details-container');
        var $toolData = $('.' + $tool + '-tool-data');
        console.log($toolData);

        $.Velocity.RunSequence([
            {
                elements: $parentModal,
                properties: { translateX: "-400px", scale: .3 },
                options: { duration: 220, easing: customEasing }
            },
            {
                elements: $toolDetailsContainer,
                properties: 'transition.shrinkIn',
                options: { duration: 220, easing: customEasing },
                sequenceQueue: true
            },
            {
                elements: $toolData,
                properties: 'transition.shrinkIn',
                options: { duration: 260, easing: customEasing },
                sequenceQueue: true
            }

        ]);
        $toolData.attr('data-origin', $(this).data('modal'));
    });

    $('.tech-n-tool-link').click(function (e) {
        e.preventDefault();

        detailsOnly = true;

        var $tool = $(this).data('id');
        var $toolDetailsContainer = $('.tool-details-container');
        var $toolData = $('.' + $tool + '-tool-data');



        var $modalOverlay = $(".mymodal-overlay"),
           $modalContainer = $(".mymodal-container");

        $.Velocity.RunSequence([
               { elements: $modalOverlay, properties: 'transition.slideDownIn', options: { duration: 220, easing: customEasing } },
               { elements: $modalContainer, properties: 'transition.fadeIn', options: { duration: 60, easing: customEasing, sequenceQueue: false } },
               { elements: $toolDetailsContainer, properties: 'transition.expandIn', options: { duration: 280, easing: customEasing, sequenceQueue: true } },
               { elements: $toolData, properties: 'transition.expandIn', options: { duration: 320, easing: customEasing, sequenceQueue: false } },
        ]);

    });

    $('.video-elic-info').click(function () {

        if (!$('.custom-tooltip').is(':visible')) {
            $('.custom-tooltip').velocity('transition.expandIn', { duration: 220 }, customEasing);
        } else {
            $('.custom-tooltip').velocity('transition.expandOut', { duration: 180 }, customEasing);
        }
    });

    $('.bs-internal-link').click(function () {
        if (!$('.brainstorming-steps').is(':visible')) {
            $('.brainstorming-steps').velocity('transition.expandIn', { duration: 260 }, customEasing);
        } else {
            $('.brainstorming-steps').velocity('transition.expandOut', { duration: 180 }, customEasing);
        }
    });

    $('.close-bs-steps').click(function () {
        $('.brainstorming-steps').velocity('transition.expandOut', { duration: 180 }, customEasing);
    });

    $('.close-info').click(function () {
        $('.custom-tooltip').velocity('transition.expandOut', { duration: 180 }, customEasing);
    });

    $('.tool-details-container__close').click(function (e) {

        var $tool = $(this).data('tool');
        var $toolDetailsContainer = $('.tool-details-container');
        var $toolData = $('.' + $tool + '-tool-data');

       
        if (detailsOnly) {

            $.Velocity.RunSequence([
                {
                    elements: $toolData,
                    properties: 'transition.expandOut',
                    options: { duration: 320, easing: customEasing }
                },
                {
                    elements: $toolDetailsContainer,
                    properties: 'transition.expandOut',
                    options: { duration: 280, easing: customEasing },
                    sequenceQueue: false
                }
            ]);


            hideModal();
            detailsOnly = false;
        } else {

            var $origin = $('.' + $toolData.data('origin'));

            $.Velocity.RunSequence([
               {
                   elements: $toolData,
                   properties: 'transition.expandOut',
                   options: { duration: 260, easing: customEasing }
               },
               {
                   elements: $toolDetailsContainer,
                   properties: 'transition.expandOut',
                   options: { duration: 180, easing: customEasing }
                   
               },
               {
                   elements: $origin,
                   properties: { translateX: 0, scale: 1 },
                   options: { duration: 220, easing: customEasing },
                   //sequenceQueue: true
               }
            ]);
        }

        e.preventDefault();

    });

    // #region MODAL FUNCTIONS
    $('.close-modal').click(function (e) {
        hideModal();



        e.preventDefault();
    });

    //$('.mymodal-overlay').click(function () {
    //    hideModal();
    //    e.preventDefault();
    //});

    function shrinkModal(modal) {

    }

    function showModal($modalContent) {

        //$('.mymodal-overlay').velocity('transition.fadeIn', { duration: 260 }, [0.18, 0.89, 0.32, 1.28]);
        //$('.mymodal-container').velocity('transition.slideUpBigIn', { duration: 260, delay: 120 }, [0.18, 0.89, 0.32, 1.28]);
        //$(modalContent).removeClass('hidden');
        //$(modalContent).velocity('transition.fadeIn', { duration: 320 }, [0.18, 0.89, 0.32, 1.28]);

        console.log($modalContent);

        var $modalOverlay = $(".mymodal-overlay"),
            $modalContainer = $(".mymodal-container");

        $.Velocity.RunSequence([
               { elements: $modalOverlay, properties: 'transition.fadeIn', options: { duration: 180, easing: customEasing } },
               { elements: $modalContainer, properties: 'transition.fadeIn', options: { duration: 1, easing: customEasing, sequenceQueue: false } },
               { elements: $modalContent, properties: 'transition.expandIn', options: { duration: 220, easing: customEasing } },
        ]);

    };

    function hideModal() {
        $('.sense-modal, .verify-modal, .limit-modal, .conception-modal, .presentation-modal, .feedback-modal, .do-close-modal, .do-cicle-modal')
        .velocity('transition.expandOut', { duration: 200 }, [0.18, 0.89, 0.32, 1.28]);

        //$('.sense-modal, .verify-modal, .limit-modal, .conception-modal, .presentation-modal, .feedback-modal, .do-close-modal, .do-cicle-modal')
        //.velocity({ scale: 1, translateX: 0 }, { duration: 0 });

        $('.mymodal-container').velocity('transition.fadeOut', { duration: 0 }, [0.18, 0.89, 0.32, 1.28]);
        $('.mymodal-overlay').velocity('transition.fadeOut', { duration: 200, delay: 160 }, [0.18, 0.89, 0.32, 1.28]);



        //.addClass('hidden');
        //$('.verify-modal').addClass('hidden');
        //$('.limit-modal').addClass('hidden');

        //$('.conception-modal').addClass('hidden');
        //$('.presentation-modal').addClass('hidden');
        //$('.feedback-modal').addClass('hidden');

        //$('.do-close-modal').addClass('hidden');
        //$('.do-cicle-modal').addClass('hidden');
    };
    // #endregion


});