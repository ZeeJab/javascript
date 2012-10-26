$(function(){

$('#add').click(add_color)
$('#box').on('hover', '.color', input_color);

});



function add_color(){
	var colors_array = colors.split(", ");

	var loop = colors_array.length;
	for(i=0; i < loop; i++) 
	{
		var box = $('<div>');
		box.addClass('box');
		var color = colors_array[i];
		box.css('background-color',color);
		$('#boxes').prepend(box);
	}


	var color = $('#input').val();

	var d = $('<div>'); 
	d.addClass('color');
	d.css('background-color', color); //now it has the style of the color that was inserted inside the text box
	$('#colors').append(d)
}


function input_color()
{
	var input = $(this).css('background-color'); 
	$('#input').css('background-color', input);
}

}

function hovering(){
	$(this).toggleClass('hover'); //this selects the thing you're on, so the box you're on AND YOU DO TOGGLE, SO WHEN YOU'RE ON IT, IT TURNS IT ON AND WHEN YOU'RE OFF OF IT IT TURNS IT OFF
}