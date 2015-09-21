maxRemChars = 140; 
remChars=maxRemChars;
var currentChars;


$(".mail").on("keydown", function(e) {
	currentChars = $(".mail").val().length; 
	temp=currentChars;
	if (e.keyCode === 8 || e.keyCode === 46) 
	{	
		if(currentChars>0)
		currentChars--;
	}
	else if( e.keyCode !== 37 && e.keyCode !== 38 && e.keyCode !== 39 && e.keyCode !== 40 && e.keyCode !== 16 && e.keyCode !== 17 && e.keyCode !== 18)
	{	
		currentChars++;
	
	}
			remChars=maxRemChars-(currentChars);
	
		if(remChars>=0)
		$(".remChar").text(remChars+" characters remaining");
		else 
		{
			if (e.keyCode !== 8 && e.keyCode !== 46 && e.keyCode !== 37 && e.keyCode !== 38&& e.keyCode !== 39 && e.keyCode !== 40)
		 	e.preventDefault();
		$(".remChar").text("Limit Exceeded");
		}
	
});


$(".mail").on("keyup", function(e) {
 
	if ((e.keyCode === 8 || e.keyCode === 46) && temp===$(".remChar").val().length) 
	{
		remChars=maxRemChars-temp;
		$(".remChar").text(remChars+" characters remaining");
	}
});
