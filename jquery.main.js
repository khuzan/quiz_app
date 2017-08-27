$(document).ready(function(){
	$('.choose').on('click',function(){
	  diff = $(this).attr('id');
	  console.log(diff);
	  askQuestion();
	});
    $('#content').hide();
    $('#pick').hide();
    $('.landing-page').ready(function(){
        $('.landing-page').show();
        $('.difficulty').hide();
        $('.container').hide();
    });
    $('#play').click(function(){
    	$('#pick').slideDown('slow');
    	$('#play').show();
    	$('#content').hide();
    });
    $('.choose').click(function(){
        $('#content').slideDown(2000);
        $('#question').fadeIn(2000);
        $('#choices').fadeIn(2000);
    	$('#play').hide();
        $('#pick').hide();
    });
   
});