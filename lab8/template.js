var counter = 0;

$(function(){

	setTimeout(display_text, 3000); //its a one shot timer. 
	setInterval(display_more, 10); //it does it on an interval, so every one second
	//...comtinually till you stop

});

function display_text()
{
	// $('#test').text('hello world');
}

function display_more()
{
	var d = $('<div>'); //create a div
	// d.text(counter); //insert the counter inside the text
	d.addClass('funky'); //add a funky class to it
	$('#test').prepend(d); //attaches it to the top of the div id in your html
	counter++; //increments the counter one by one
	var color1 = counter % 256;
	var color2 = (counter + counter) % 256;
	var color3 = (counter * counter) % 256;

	var color = counter % 256; //the color is going to be a number never greater than 255. 
	//so divide it by 255 and give me the reminder
	var color_string = 'rgb('+ color1 +', '+ color2 +', ' + color3 + ')';//converting it to a string
	d.css('background-color', color_string);
}