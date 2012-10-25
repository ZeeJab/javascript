var alpha_array = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var number_of_cards = 0;
var final_array = [];



$(function(){

	$('input').click(create_board);
	$('#boxes').on('click', '.box', select_box);
	$('#boxes').on('click', '.select', unselect);


});

function create_board()
{
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

			for(var i = 0;i < number_of_cards;i++)
			{
				$('#'+ i).text(final_array[i]);
			}
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

// create an array and run it through the randomizer 
// then create little boxes on the screen and the boxes will be associated with the letters in the array
// but you cant see them
// when you click on it it shows and if you click on something that matches it. if it doesnt match it goes away and if it matches it stays

// a timer has to start once you start the game.

// compare the text with an if statement and if matches then it 

// rows are id's and colums are classes
// 3 inputs for the small medium and large


// you hover over boxes 

// and when you match the last one it changes the color to show you you've one and it timer stops

// small board - 10 characters
// medium board - 20 characters
// and large board - 40 characters

// the difference is how many letters you have in each board
// the board size differs based on number of letters in the array

// its called memory

// its all logic
// you hover it changes the color and you click and it shows the letter