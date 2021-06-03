$(function () {
    $('#followers__subtitle-check-all').click(function () {
         if ($(this).is(':checked')) {
             $('.followers__item-checkbox-input').prop('checked', true)
             $('.followers__item').addClass('active')
         } else {
             $('.followers__item-checkbox-input').prop('checked', false)
             $('.followers__item').removeClass('active')
         }
    })
    $('.followers__item-checkbox-input').click(function () {
        if ($(this).is(':checked')) {
            $(this).parents('.followers__item').addClass('active')
        } else {
            $(this).parents('.followers__item').removeClass('active')
        }
    })

    // progress bar
    var progressBarOptions = {
        startAngle: -1.55,
        size: 200,
        lineCap: 'round',
        fill: {
            color: '#5FC9A5'
        }
    }

    $('.circle').circleProgress(progressBarOptions).on('circle-animation-progress', function(event, progress, stepValue) {
        $(this).find('strong').html(Math.round(100 * stepValue) + '<i>%</i>');
    });
})