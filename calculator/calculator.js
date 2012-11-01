$(function(){

	$('#1,#2,#3,#4,#5,#6,#7,#8,#9,#0').click(answer);
	$('#C').click(clear);
	$('#plus').click(add);
	$('#subtract').click(subtract);
	$('#divide').click(divide);
	$('#product').click(multiply);
	$('#equals').click(equals);

});

function answer(){

	var v = $(this).val();
	$('#answer').val($('#answer').val() + v);	
}

function clear(){
	
	$('#answer').val('');
	$('#operation').val('');
	$('#operation').removeClass('activeAnswer');
	$('#equals').attr('onclick','');
}

function add(e) { 

	if($('#answer').val() == ''){
		return false;
		$('#equals').attr('onclick','');
	}
	else if ( $('#operation').attr('class') == 'activeAnswer') {
		$('#operation').val( $('#operation').val() + $('#plus').val() );
		$('#answer').val('');
		$('#equals').attr('onclick','');
	}
	else{
		$('#operation').val( $('#operation').val() + $('#answer').val() + $('#plus').val() );
		$('#answer').val('');
		$('#equals').attr('onclick','');
	}
}
	
function subtract(e) { 

	if($('#answer').val() == ''){
		return false;	
		$('#equals').attr('onclick','');
	}
	else if ( $('#operation').attr('class') == 'activeAnswer') {
		$('#operation').val( $('#operation').val() + $('#subtract').val() );
		$('#answer').val('');
		$('#equals').attr('onclick','');
	}
	else{
		$('#operation').val( $('#operation').val() + $('#answer').val() + $('#subtract').val() );
		$('#answer').val('');
		$('#equals').attr('onclick','');
	}
}

function divide(e) { 

	if($('#answer').val() == ''){
		return false;	
		$('#equals').attr('onclick','');
	}
	else if ( $('#operation').attr('class') == 'activeAnswer') {
		$('#operation').val( $('#operation').val() + $('#divide').val() );
		$('#answer').val('');
		$('#equals').attr('onclick','');
	}
	else{
		$('#operation').val( $('#operation').val() + $('#answer').val() + $('#divide').val() );
		$('#answer').val('');
		$('#equals').attr('onclick','');
	}
}

function multiply(e) { 

	if($('#answer').val() == ''){
		return false;	
		$('#equals').attr('onclick','');
	}
	else if ( $('#operation').attr('class') == 'activeAnswer') {
		$('#operation').val( $('#operation').val() + $('#product').val() );
		$('#answer').val('');
		$('#equals').attr('onclick','');
	}
	else{
		$('#operation').val( $('#operation').val() + $('#answer').val() + $('#product').val() );
		$('#answer').val('');
		$('#equals').attr('onclick','');
	}
}	

function equals(){

	if($('#equals').attr('onclick') != 'return false'){

		var a = $('#answer').val();
		var b = $('#operation').val();
		var c = b.concat(a);
		$('#answer').val(eval(c));
		$('#operation').val(eval(c));
		$('#operation').addClass('activeAnswer');
		$('#equals').attr('onclick','return false');

	}
}