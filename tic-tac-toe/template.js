won = false;
turn = "X"

$(function(){

	$("td").click(function(){
      if ($(this).hasClass("chosen")){
        console.log("already chosen")
      } else {
        $(this).addClass("chosen");
        $(this).html(turn)
        turn = (turn == "X") ? "O" : "X";
        checkWin();
    }

});

	function checkWin(){
    
    a0 = $("tr:nth(0) td")[0]
    a1 = $("tr:nth(0) td")[1]
    a2 = $("tr:nth(0) td")[2]

    b0 = $("tr:nth(1) td")[0]
    b1 = $("tr:nth(1) td")[1]
    b2 = $("tr:nth(1) td")[2]

    c0 = $("tr:nth(2) td")[0]
    c1 = $("tr:nth(2) td")[1]
    c2 = $("tr:nth(2) td")[2]

    if (a0 == "X" && a1 == "X" && a2 == "X"){
      won = true;
    }
}


