var counter=1;

$(function(){
	//setInterval
	//animate margin-left
	setInterval(function(){
		if(counter!=6)
		{
			$('#slider .slides').animate({'margin-left':'-=720px'},1000);
			counter++;
		}
		else if(counter==6)
		{
			$('#slider .slides').animate({'margin-left':'0px'},1000);
			counter=1;
		}
	},5000);
});