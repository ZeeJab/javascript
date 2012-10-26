var Dog; //its uppercase because it represent something that creates children

$(function(){

	Parse.initialize("dhwhaOJUr9VNdwuj6UK03BcC7mNErprHemeMmOj0", "h58sr3z6V2RxFmA8kfn0bWD3zi9WdGEwWUDfAB9z");
	Dog = Parse.Object.extend("Dog"); //becaue you have that parse in your html you can use the Parse.
	$('#b1').click(save_data);
	$('#b2').click(get_data);	

});

function save_data()
{
	var d1 = new Dog();
	var name = $('#t1').val();
	var age = $('#t2').val();
	d1.save({dog_name: name, dog_age: age}, {success: show_success});
}

function show_success()
{
	console.log('data saved to parse!')
}

function get_data()
{
	var query = new Parse.Query(Dog);
	query.ascending("dog_name"); //you can sort by any key you have
	query.find({
		success: function(results) {
			for(var i =0; i < results.length; i++)
			{
				vr p = $('<p>');
				var name = results[i].get('dog_name'); //results is an array of dogs and i in the loop
				//on each dog you can say .get on any key you have
				p.text(name); //get the name
				$('#data').prepend(p); //and then attach it to the p tags
			}
		},
		error: function(error) {}
}); //find({success: fn, error: fn});
}
