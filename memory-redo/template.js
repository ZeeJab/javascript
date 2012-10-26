var alpha_array = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var number_of_cards = 0;
var final_array = [];
var selected1 = null;
var selected2 = null;
var selected3 = null;
var counter = 0;
var active;


$(function(){

	$('input').click(create_board);
	$('#board').on('click', '.box', select_box1);

});

function start_timer()
{
	counter++;
	$('.time').text(counter);
}

function stop_timer() { 
   clearInterval(active); 
}

function create_board()
{
	stop_timer();
	$('#win').addClass('hide');
	active = setInterval(start_timer, 1000);
	counter = 0;

	var button_clicked = $(this).attr('id');
	$('.box').remove();
	final_array = []; //sets the array back to empty after small medium large

		if(button_clicked == 'small')
		{
			number_of_cards = 10;
		} 

		if(button_clicked == 'medium')
		{
			number_of_cards = 20;
		}

		if(button_clicked == 'large')
		{
			number_of_cards = 40;
		}

		for(var i= 0; i < number_of_cards; i++)
		{
			var card = $('<div>');
			card.addClass('box');
			card.attr('id', i);
			$('#board').append(card);
		}

		for(var i = 0;i < (number_of_cards/2); i++)
		{
			final_array.push(alpha_array[i]);
			final_array.push(alpha_array[i]); //you do it twice it gives you ten cards with the first 5 letters
		}

		final_array = randomizeArray(final_array);
}

function select_box1()
{

	if (selected1 != null)
	{
	 	selected2 = $(this);

	 	// if match as long as you're not clicking the same thing twice
		if (selected1.attr('id') != $(this).attr('id'))
		{
			if (final_array[selected1.attr('id')] == final_array[selected2.attr('id')]) 
			{
				selected1.addClass('match');
				selected2.addClass('match');
				selected1.removeClass('select');
				selected1.text(final_array[selected1.attr('id')]);
				selected2.text(final_array[selected2.attr('id')]);
			}
			// if not a match
			else
			{
				selected1.removeClass('select');
				selected2.addClass('select');
				selected1.text("");
				selected1 = null;
				selected2.text(final_array[selected2.attr('id')]);
			}
		}

		for (var x = 0; x < number_of_cards; x++)
		{
			if ($('#' + x).hasClass('match'))
				$('#' + x).text(final_array[x]);
		}

	}

	if (selected1 == null)
	{
		selected1 = $(this);
		$(this).addClass('select');
		console.log(selected1);
		selected1.text(final_array[selected1.attr('id')]);

	}

	if (!$(".box").not(".match").length) 
	{
    	stop_timer()
    	$('.box').addClass('red');
    	$('#win').removeClass('hide');	
	}
}	

 

//Randomize the Cards
function randomizeArray(array){
  var i = array.length;
  if (i == 0) return false;
  while (--i){
     var j = Math.floor(Math.random() * (i + 1));
     var tempi = array[i];
     var tempj = array[j];
     array[i] = tempj;
     array[j] = tempi;
  }
  return array;
}