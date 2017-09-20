/**
 * Created by chongjie.luo on 2017/7/19.
 */
window.onload = function () {
    $('#select a').on('click', function () {
        if (!$(this).hasClass('focus')) {
            $(this).addClass('focus').siblings().removeClass('focus');
        }

        if ($(this).hasClass('resume')) {
            $('.skill').hide();
        } else {
            $('.skill').show();
        }

    });
    if (window.location.hash != '#/home') {
        $('.skill').hide();
        $('#select a').eq(1).addClass('focus').siblings().removeClass('focus');
    }
}