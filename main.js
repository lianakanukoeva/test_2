$('.test__block').ready(function(){
    $('.test__checkbox').click(function(){
        $(this).toggleClass('checkbox-on');
        $(this).parent().toggleClass('active');
    })
});