$(function(){

	$('#add_animal').click(add_animal);

});

function add_animal()
{
	var animal = {};
	animal.name = $('#animal_name').val();
	animal.color = $('#animal_color').val();
	animal.image = $('#animal_image').val();
	insert_animal(animal); //calling the function we created bellow
}

function insert_animal(animal) //this is a variable that has been made up
{
	var d = $('<div>');
	d.addClass('animal');
	d.css('background-color', animal.color);
	d.text(animal.name);

	var i = $('<img>');
	i.attr('src', animal.image);
	d.append(i);
	
	$('#animals').prepend(d);
}