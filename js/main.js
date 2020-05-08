$(Document).ready(function() {
    $('.button[filter="wd"]').click(function(){
        if($(this).attr('val')=='off') {
            $('.button[filter]').attr ('val', 'off');
            $(this).attr('val', 'on');
            $('.button[filter]').removeClass('focused');
            $(this).addClass('focused');
            $('.filter > div').hide(300);
            $('.filter > div[filter="wd"]').show(300);
        }
     })
     $('.button[filter="ud"]').click(function(){
        if($(this).attr('val')=='off') {
            $('.button[filter]').attr ('val', 'off');
            $(this).attr('val', 'on');
            $('.button[filter]').removeClass('focused');
            $(this).addClass('focused');
            $('.filter > div').hide(300);
            $('.filter > div[filter="ud"]').show(300);
        }
     })
     $('.button[filter="moc"]').click(function(){
        if($(this).attr('val')=='off') {
            $('.button[filter]').attr ('val', 'off');
            $(this).attr('val', 'on');
            $('.button[filter]').removeClass('focused');
            $(this).addClass('focused');
            $('.filter > div').hide(300);
            $('.filter > div[filter="moc"]').show(300);
        }
     })
     $('.button[filter="all"]').click(function(){
        if($(this).attr('val')=='off') {
            $('.button[filter]').attr ('val', 'off');
            $(this).attr('val', 'on');
            $('.button[filter]').removeClass('focused');
            $(this).addClass('focused');
            $('.filter > div').show(300);
        }
     });
     /*Menu*/
    $('ul.menu a[href^="#"').click(function(){
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).ofwet().top
        }, 500);
        return false: 
    });
});