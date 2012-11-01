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

	var loop = colors_array.length; // you can also rewrite this is the for loop 
	//like this for(var i = 0; i < colors.length; i++)

	for(i=0; i < loop; i++) 
	{
		var box = $('<div>');
		box.addClass('box');
		var color = colors_array[i];
		box.css('background-color',color);
		$('#boxes').prepend(box);
		// console.log(color);
	}

}

function input_color()
{
	var input = $(this).css('background-color'); //it see what the background 
	//color of what you just hovered over is. 
	// wihtout the comma it tells you but with the comma you set the background color
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

// 1. MAKE COLORS SHOW UP WHEN YOU CLICK ADD COLORS
// IT TAKES WHATS IN THE TEXT BOX AND MAKES IT INTO AN ARRAY
// s = "blue, green, orange"
// "blue, green, orange"
// s.split(', ')
// ["blue", "green", "orange"]
// array.length tells you how many times you loop through it

// 2. dynamically make a hover over this and grab the background color 
//$(this).css('background-color') and change the background color of the text box to that color

// 3.move the elements back and forth with the arrows
// s.prev().append;
// s.next();
// then you can move it with append and prepend and before and after

// you wanna create a global variable called selected and it will initially be equal to null (nothing)
// and when you click on this selected gets equal to this 
// so then you do the previous and next and bla blah blah

// this == selected then select it back to null

// 1. make a text box and a button and arrows
// 2. in your text box you're gonna put it some colors "blue, green, yellow"
// 3. click add colors split loop
// 4. hover [on] function on this 
// this.css('backgroundcolor') and the background color of the textbox same as that


// 5. select -- when you click once it puts a border around it and you can click again 
//and it unselects it and (so at most there's either one or none things selected)

// 6. you can only move a color that's selected, so once something is selected you can use 
//the arrows to move it back and forth... 


// 7. double click and it removes this. its called a remove 
// $(this).remove;

// add -- easy
// hover -- easy
// select/unselect -- tough
// move -- tough
// dblclick 
