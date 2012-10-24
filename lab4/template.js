$(function(){

$('#color_button').click(add_color)
$('#colors').on('hover', '.color', hovering); //#thing that never changes.on('event','dynamic thing that changes','what function you wanna call when you hover?')

});

function hovering(){
	$(this).toggleClass('hover'); //this selects the thing you're on, so the box you're on AND YOU DO TOGGLE, SO WHEN YOU'RE ON IT, IT TURNS IT ON AND WHEN YOU'RE OFF OF IT IT TURNS IT OFF
}

function add_color(){
	var color = $('#color_text').val();
	var d = $('<div>'); //we're saying create this thing
	d.addClass('color');
	d.css('background-color', color); //now it has the style of the color that was inserted inside the text box
	$('#colors').append(d)
}