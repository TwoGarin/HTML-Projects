$('.menu') .on('click', function () {
    $(this).toggleClass('active');

    $('.overlay').toggleClass('menu-open');
});


$('.nav a') .on('click', function () {
    $('.menu').toggleClass('active');
    $('.overlay').toggleClass('menu-open');
});
