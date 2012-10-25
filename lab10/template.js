$(function(){

	$('#add').click(search_flickr);

});

function search_flickr()
{
	var search = $('#search').val();
	$.getJSON('http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=63a062fea2bb928c6d6f1f7e685e0e52&tags=' + search + '&format=json&jsoncallback=?', flickrResults); //put your own key in and change the callback= to ?
}

function flickrResults(data)
{
	$.each(data.photos.photo, getPhoto); //each is like a for loop but a supoer simple for loop
	//photo is all your photos. the first time it calls it, it will be zero
	//then it gets processed and it finds another photo and then it keeps going,
	//up the indexes.
}

function getPhoto(index, item)//index is the index of the array of the photo, item is the actual photo(object)
{
	var src = "http://farm"+ item.farm +".static.flickr.com/"+ item.server +"/"+ item.id +"_"+ item.secret +"_m.jpg";
	var div = $('<div>');
	div.addClass('photo');
	var img = $('<img>');
	img.attr('src', src);
	div.append(img);
	$('#photos').prepend(div);
}
