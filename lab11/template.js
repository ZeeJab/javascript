var counter = 0;
var photo = [];
var page = 1;
var i;


$(function(){
	$('#add').click(search_flickr);
});

function search_flickr() 
{
	var search = $('#search').val();

	$.getJSON('http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=4888df4a43f0c000c3117187fc3cc0ce&text=' + search + '&page=' + page + '&format=json&jsoncallback=?', flickrResults);
	//$.getJSON('http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=71318b6fbd0a75b86300d5c205704f73&text=' + search + '&format=json&jsoncallback=?', flickrResults);	
}


function flickrResults(data)
{
	$.each(data.photos.photo, getPhoto);

	i = setInterval(display_more, 100);
}

function getPhoto(index, item)
{
	photo[index]=item;
}

function display_more() {
	
	$('#counter').text(counter);

	console.log(photo[counter]);

	var item = photo[counter];
	var src = "http://farm"+ item.farm +".static.flickr.com/"+ item.server +"/"+ item.id +"_"+ item.secret +"_m.jpg";
	var div = $('<div>');
	div.addClass('photo');
	var img = $('<img>');
	img.attr('src',src);
	div.append(img);

	$('#photos').prepend(div);

	counter++;

	if (counter == 700)
	{
		clearInterval(i);
		counter=0;
		page++;
		search_flickr();
	}
}
// var couter = 0;
// var photo = [];
// var page = 1;
// var i;

// // var timer = setInterval(getPhoto, 300);

// $(function(){

// 	$('#add').click(search_flickr);
// 	// setInterval(, 10); //it does it on an interval, so every one second
// 	// ...comtinually till you stop

// });

// function search_flickr()
// {
// 	var search = $('#search').val();
// 	$.getJSON('http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=71318b6fbd0a75b86300d5c205704f73&text=' + search + '&per_page=500&page=&format=json&jsoncallback=?', flickrResults); //put your own key in and change the callback= to ?
// }

// function flickrResults(text)
// {
// 	results = $.each(text.photos.photo, getPhoto);
// 	// counter++;
// 	//each is like a for loop but a super simple for loop
// 	//photo is all your photos. the first time it calls it, it will be zero
// 	//then it gets processed and it finds another photo and then it keeps going,
// 	//up the indexes.
// }

// function getPhoto(index, item)
// {
// 	photo[index] = item;
// }

// function display_more()//index is the index of the array of the photo, item is the actual photo(object)
// {
// 	$('#counter').text(counter);

// 	var item = photo[counter];
// 	var src = "http://farm"+ item.farm +".static.flickr.com/"+ item.server +"/"+ item.id +"_"+ item.secret +"_m.jpg";
// 	var div = $('<div>');
// 	div.addClass('photo');
// 	var img = $('<img>');
// 	img.attr('src', src);
// 	div.append(img);

// 	$('#photos').prepend(div);

// 	counter++;

// 	if
// }


// // function display_more()
// // {
// // 	var d = $('<div>'); //create a div
// // 	// d.text(counter); //insert the counter inside the text
// // 	// d.addClass('funky'); //add a funky class to it
// // 	$('#add').prepend(d); //attaches it to the top of the div id in your html
// // 	counter++; //increments the counter one by one
// // 	var color1 = counter % 256;
// // 	var color2 = (counter + counter) % 256;
// // 	var color3 = (counter * counter) % 256;

// // 	var color = counter % 256; //the color is going to be a number never greater than 255. 
// // 	//so divide it by 255 and give me the reminder
// // 	var color_string = 'rgb('+ color1 +', '+ color2 +', ' + color3 + ')';//converting it to a string
// // 	d.css('background-color', color_string);
// // }



// // flickr + timer
// // every 1 second add photo
// // text 
// // and or 
// // use the documentation and see what you can dd to make your search more interesting

// // on timer, everytime it fires... from the results
// // as soon as your result comes back start the timer
// // this is gonna work untill you get to 100, you can make it 500 by uping the default

// // the timer has to keep going back page 1
// // newest is always first so prepend
// // keep going until there are no more pages left
// // use the fickr api to guide you through this