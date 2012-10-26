$(function(){

$('#add').click(add_color)

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
	$('#outputs').append(d)
}

