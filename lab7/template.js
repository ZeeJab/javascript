$(function(){

$('.a').hover(color_the_box);
$('#add').click(add_node);
$('#addcolors').click(add_colors);
// $('.box').hover(make_pretty); //again this does not work because it came in dynamically
$('#boxes').on('hover', '.box', make_pretty); //so you use on instead ('mouse event', 'normal selector you would pick', function that you run when you hover over the box)


});

function make_pretty()
{
	$(this).toggleClass('alert'); //this doesnt work because they were created dynamically
	//so you have to put the On something that's already there... so the #boxes

}

function add_colors()
{
	var count = $('#count').val();
	count = parseInt(count);
	for(var i = 0; i < count; i++)
	{
		var box = $('<div>'); //you're creating a div
		box.text(i);
		box.addClass('box');
		$('#boxes').append(box);
	}
}

function add_node()
{
	var element = $('#element').val();
	var node = $('<' + element + '>'); //makes the tag
	var css = $('#css').val(); //adds the css
	var text = $('#text').val(); //adds the text
	node.addClass(css); //adds the class for css
	node.text(text); //adds the text
	$('#elements').prepend(node) //attaches the p tag to the elements node -prepend puts it at the top of the div
}

// function color_the_box()
// {
// 	// $(this).css('background-color', 'red');
// 	// $(this).addClass('alert'); //another way to do it by adding a .alert class to the css file
// 	$(this).toggleClass('alert'); //toggleClass adds it and removes it when you hover away so it does a addClass and removeClass
// }


function color_the_box() //change the background color to whatever is written inside the box
{
	var color = $(this).text();
	$(this).css('background-color', color);
}

//you could also you the mouseenter and mouseleave function to do the same thing as toggleClass