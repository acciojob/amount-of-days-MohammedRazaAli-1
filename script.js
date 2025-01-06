//your JS code here. If required.
function daysOfAYear(year){
	
	if(year %4 ==0 && year %100 !=0){
		return "leap year";
	}else{
		return "not a leap year"
	}
}



 let inputyear =prompt("enter year") 
let answer = daysOfAYear(inputyear)
alert(answer)