$(function(){

	var balance_checking = $('#cash-checking').text();
	balance_checking = parseInt(balance_checking);

	var balance_savings = $('#cash-savings').text();
	balance_savings = parseInt(balance_savings);

	$('#deposit-checking').click(dep);
	$('#withdraw-checking').click(wd);

	$('#deposit-savings').click(depsavings);
	$('#withdraw-savings').click(wdsavings);


	function dep()
	{

	var amount = $('#amount-checking').val();
	amount = parseInt(amount);	

	balance_checking = balance_checking + amount;
	balance_checking = parseInt(balance_checking);

	$('#cash-checking').text(balance_checking);
	}

	function wd()
	{
	amount = $('#amount-checking').val();
	amount = parseInt(amount);	

	balance_savings = $('#cash-savings').text();
	balance_savings = parseInt(balance_savings);

	if(amount<=balance_checking)
	{
		balance_checking = balance_checking - amount;
	}
	else if(amount<=(balance_checking + balance_savings))
	{
		balance_savings = balance_savings - (amount - balance_checking);
		balance_checking = 0; //takes the checking balance to zero
	}	


	$('#cash-checking').text(balance_checking); //updates the checking balance on the screen
	$('#cash-savings').text(balance_savings); //updates the savings balance on the screen

	}

	function depsavings()
	{
	var amount = $('#amount-savings').val();
	amount = parseInt(amount);	

	balance_savings= balance_savings + amount;
	balance_savings= parseInt(balance_savings);

	$('#cash-savings').text(balance_savings);

	}

	function wdsavings()
	{
	amount = $('#amount-savings').val();
	amount = parseInt(amount);	

	balance_savings = $('#cash-savings').text();
	balance_savings = parseInt(balance_savings);

	if(amount <= balance_savings)
	{
	balance_savings = balance_savings - amount;
	$('#cash-savings').text(balance_savings);
	}

	

	}

});






// THIS IS THE LOGIC


