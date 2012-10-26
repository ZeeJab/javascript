var Jins;
var selected = null;

$(function(){

	$('#add').click(search_flickr);
	
	Parse.initialize("dhwhaOJUr9VNdwuj6UK03BcC7mNErprHemeMmOj0", "h58sr3z6V2RxFmA8kfn0bWD3zi9WdGEwWUDfAB9z");
	Jins = Parse.Object.extend("Jins"); //becaue you have that parse in your html you can use the Parse.
	$('#b1').click(save_data);
	$('#b2').click(get_data);

	$('#photos').on('click','.jinbutton',save_data);

	get_data();

	$('#photos').on('click', '.photo', jin_it);

});

function search_flickr()
{
	var search = $('#search').val();
	$.getJSON('http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=63a062fea2bb928c6d6f1f7e685e0e52&tags=' + search + '&per_page=20&format=json&jsoncallback=?', flickrResults);
}

function flickrResults(data)
{
	$.each(data.photos.photo, getPhoto); 
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

function jin_it()
{
	
	var div = $('<div class="bitch">');
	var input = $('<input id="title" type="text" class="jinnote" placeholder="note, note...">');
	var button = $('<input id="add" type="button" class="jinbutton" value="JIN it!">');
	var span = $('<span>');

	span.append(input);
	div.append(span);
	div.append(button);
	
	$(this).after(div);


	console.log('WHAT THE FUCKKKK');

}



function save_data()
{
	var d1 = new Jins();
	var url = $(this).parent().prev().children('img').attr('src');
	var note = $(this).parent().children('span').children('input').val();

	d1.save({jin_url: url, jin_note: note}, {success: show_success});
	get_data();

	$(this).parent().remove();
}

function show_success()
{
	console.log('data saved to parse!')
}

function get_data()
{ 	$('#wall').empty();
	var query = new Parse.Query(Jins);
	query.ascending("createdAt"); //you can sort by any key you have
	query.find({
		success: function(results) {
			for(var i =0; i < results.length; i++)
			{
				var img = $('<img>');
				var url = results[i].get('jin_url');
				img.attr('src', url);
				var note = results[i].get('jin_note');
				img.attr('title', note); 
				// p.text(note); //get the name
				$('#wall').prepend(img);
			}
		},
		error: function(error) {}
}); //find({success: fn, error: fn});

		console.log('WHAT THE FUCK!');

}