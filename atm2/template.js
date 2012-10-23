$(function(){

	var balance = $('#cash').text();
	balance = parseInt(balance);

	$('#deposit').click(deposit);
	$('#withdraw').click(withdraw);

	function deposit()
{
	var amount = $('#amount').val();
	amount = parseInt(amount); 

	balance = balance + amount;
	balance = parseInt(balance);

	$('#cash').text(balance);

	if(balance < 0)
		$('#cash').css('background-color', 'red');  
	else
		$('#cash').css('background-color', 'green'); 

} 

function withdraw()
{
	var amount = $('#amount').val();
	amount = parseInt(amount); 

	balance = balance - amount;
	balance = parseInt(balance);

	$('#cash').text(balance);

	if(balance < 0)
		$('#cash').css('background-color', 'red');  
	else
		$('#cash').css('background-color', 'green'); 	
} 

});




