$(function(){

	$('#b1').click(popup); //popup is the function

});

//so you have to create the function
function popup()
{
	//alert('button pressed!');
	var t = $('#t1').val(); //getting and putting... when its empty is getting th value and the var captures it
	console.log('you typed in ' + t);

	var n = parseInt(t);
	var z = cube(n);
	$('#i2').text(z); //.text changes the text

	if(z > 100) //for if while and and for's if there's only 1 line under it you dont need the {}
		$('#i2').css('color', 'red');  //.css changes the css 
	else
		$('#i2').css('color', 'blue');  //.css changes the css 

	for(var i = 0; i < z; i++)
		console.log('counting: ' + i);	
}

function cube(x)
{
	return x *  x *x;
}