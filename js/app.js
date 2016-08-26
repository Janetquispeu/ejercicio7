var n = parseInt(prompt("Inserte numero"));
 
if (n % 2 == 0){
	if (n>=2  &&  n<= 5){
		document.write("Good");
	}
	else if (n>=6   &&  n<= 20){
		document.write("Great");
	}
	else if (n > 20 && n<=100){
		document.write("Perfect");
	}
}
else {
	document.write("Odd");
}

