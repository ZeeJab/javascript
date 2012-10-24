var selected = null

$(function(){

$('#addcolors').click(add_colors);
$('#boxes').on('mouseenter','.box', input_color);
$('#boxes').on('mouseleave','.box', make_it_white);
$('#boxes').on('click', '.box', select_box);
$('#boxes').on('click', '.select', unselect);
$('#boxes').on('dblclick', '.box', remove);
$('#left').click(backward);
$('#right').click(forward);

});

function add_colors()
{
	var colors = $('#input').val();
	var colors_array = colors.split(", ");

	var loop = colors_array.length;

	for(i=0; i < loop; i++)
	{
		var box = $('<div>');
		box.addClass('box');
		var color = colors_array[i];
		box.css('background-color',color);
		$('#boxes').prepend(box);
		console.log(color);
	}

}

function input_color()
{
	var input = $(this).css('background-color');
	$('#input').css('background-color', input);
}

function select_box()
{
	if(selected != null)
		{
		selected.removeClass('select');
		selected = $(this).addClass('select');
		}
	else
		selected = $(this).addClass('select');
}

function unselect()
{
	selected.removeClass('select');
	selected = null;	
}


function make_it_white()
{
	$('#input').css('background-color', '#FFF');
}

function remove()
{
	$(this).remove();
}

function forward()
{
	var next = selected.next();
	next.after(selected);
}

function backward()
{
	var prev = selected.prev();
	prev.before(selected);
}
