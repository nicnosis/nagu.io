$(document).ready(function(){
    sizeBlocks();
});
$(window).resize(function() {
    sizeBlocks();
});

function sizeBlocks() {
    var w = $('.block').css('width');
    $('.block').css('height', w);
}