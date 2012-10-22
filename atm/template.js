/* 
 * Balance = 1,000
 * do you want to do a (d)posit or (w)ithdraw or (q)uit?
 * ask whats the amount
 * so if d -> 50
 * then print it in console, you just deposited $50 && nwo your balance is "x"
 * then loop back around until they type quit.
 */


$(function(){

	var balance = 1000;
	var response = prompt('Do you want to do a (d)eposit or (w)ithdraw or (q)uit?');

	while(response != 'q')
	{	
		var amount = prompt('What is the amount?'); 
		amount = parseInt(amount);

		if(response == 'd')
		{
			balance = amount + balance;
			console.log('You just deposited $ ' + amount + '.00 and your balance is: ' + balance + '.00');
		}
		else
		{
			balance = balance - amount;
			console.log('You just withdrew $ ' + amount + '.00 and your balance is: ' + balance + '.00');
		}

		response = prompt('Do you want to do a (d)eposit or (w)ithdraw or (q)uit?'); //if you don't do this you will be in an infinite loop
	}
	
	console.log('Thanks for ATMing!')
	

});