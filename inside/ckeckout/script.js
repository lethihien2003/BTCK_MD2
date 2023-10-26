$(document).ready(function() {
    $('.side-show a').removeAttr('href');

    $('.side-show').on('click', function() {
        $('.side-show').toggleClass('show-hide');
        $('.category-menu ul > li:gt(4)').toggleClass('side-hide');
    });
});
/* ============================== main ==============================*/
/*---------------------------accordion-----------------------------  */
 