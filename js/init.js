$(document).ready(function () {
    $('.btn-interfaz').on('click', function () {
        var i = $(this).find("i").text('check_circle');
        // $(this).addClass('checked'); 
    });

    $('.nav_footer').on('click', function () {
        var x = $(this).attr('nav_top');
        $('.nav-link').removeClass('active');
        $('#'+x).addClass('active');
    });

    $('.nav_link_2').on('click', function () {
        var x = $(this).attr('href');
        $('.tab_2').removeClass('show active');
        $(x).addClass('show active');
    });

});
