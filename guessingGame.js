 var random=Math.floor(Math.random() * 100) + 1 ; 
 var numGuess=0;
 function submit(){
 	var par='<p id="hello">My number is lower, guess again!!</p>';
 	var par2='<p id="hello">My number is higher, guess again!!</p>';
 	var num=document.getElementById("guess").value;
 	var enteredNum=parseInt(num);	
 	
 	if(enteredNum>random){
 		if(numGuess<1){
 		 document.getElementById("add").innerHTML= par;
 		 document.getElementById("guess").value="";
 	 	numGuess++;

 	 		}else{
 	 		document.getElementById("hello").innerHTML="My number is lower, guess again!!";
 	 		document.getElementById("guess").value="";
 	 	numGuess++;
 	 		if((numGuess===5)&&(random!=enteredNum)){
 	 		document.getElementById("hello").innerHTML="Guesses up!! The number is"+random;	
 	 		}
 	 		}
 } else if(enteredNum<random){
 			if(numGuess<1){
 		 document.getElementById("add").innerHTML= par2;
 		 document.getElementById("guess").value="";
 	 	numGuess++;
 	 		}else{
 	 		document.getElementById("hello").innerHTML="My number is higher, guess again!!";
 	 		document.getElementById("guess").value="";
 	 	numGuess++;
 	 	if((numGuess===5)&&(random!=enteredNum)){
 	 		document.getElementById("hello").innerHTML="Guesses up!! The number is "+random;	
 	 		}
 	 		}

 	}else{
 		document.getElementById("hello").innerHTML="That is Correct!"
 	}



 	}
