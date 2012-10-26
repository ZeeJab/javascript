$(function(){

	$('#enter').click(add_number);

});

function add_number()
{
	var number = $('#input').val();
	
	for(var i = 0; number > i; i++)
	{
		var d = $('<div>');
		d.text(i);
		d.addClass('box');
		$('#boxes').append(d);	
	}	
}

