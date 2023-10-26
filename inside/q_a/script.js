$(document).ready(function() {
    $('.side-show a').removeAttr('href');

    $('.side-show').on('click', function() {
        $('.side-show').toggleClass('show-hide');
        $('.category-menu ul > li:gt(4)').toggleClass('side-hide');
    });
});
/* ============================== main ==============================*/
/*---------------------------accordion-----------------------------  */
$(document).ready(function () {
    $('.tab button').click(function () {
        var btn = $(this).find('.fa');
        var content = $(this).parent().find('.content');

        if (btn.hasClass('fa-plus')) {
            btn.removeClass('fa-plus').addClass('fa-minus');
            content.show(500);
            $(this).find('.text').css('color', 'blue').css('font-weight', 'bold');
        } else {
            btn.removeClass('fa-minus').addClass('fa-plus');
            content.hide(500);
            $(this).find('.text').css('color', '#323232');
        }
    });
});
