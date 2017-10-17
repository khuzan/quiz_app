$(document).ready(function(){
	$('.choose').on('click',function(){
	  diff = $(this).attr('id');
	  console.log(diff);
	  askQuestion();
	});
    $('#content').hide();
    $('#pick').hide();
    $('#question').hide();
    $('#submit').hide();
    // $('.landing-page').ready(function(){
    //     $('.landing-page').show();
    //     $('.difficulty').hide();
    //     $('.container').hide();
    // });
    $('#play').click(function(){
    	$('#pick').slideDown('slow');
        $('#play').show();
    	$('#content').hide();
    });
    $('.choose').click(function(){
        level.diff = 1;
        console.log('LEVEL:'+level.diff+" "+diff);
        $('#question').fadeIn(2000);
        $('#choices').fadeIn(2000);
        $('#div_Q').slideDown();
        $('#submit').show();
    	$('#play').hide();
        $('#pick').hide();

    });
    
    $('#content').on('click','.get',function(){
        currentQuestion = 0;
        $('#pick').slideDown('slow');
        $('#play').show();
        $('#content').hide();
        $('#div_Q').hide();
    });
    $('#content').on('click','.easy',function(){
        $('#easy').attr('disabled',false);
    });
    $('.get').css('padding', '10px');
});