function sayHELLO () {
	var comment= document.getElementById("button").value;
	var comment2=" <h4>Thanks a lot for your feedback : " + comment +" We are happy that you appreciated it :) </h4>";



    //document.getElementById("result").textContent=comment2;
    //document.querySelector("#result").textContent=comment2;
    

    if ( comment >5 ){

    		document.getElementById("result").innerHTML=comment2;
    }
   
    else if (comment<5){
    	var comment3=" <h4>Thanks for your feedback : " + comment +". We are sorry that we have disappointed you, we will keep improving, hoping to increase your score ! </h4>";
    	document.getElementById("result").innerHTML=comment3;
    

    }
    else if (comment > 10){
 			var comment4=" <h4> We were not expenting to have such an impact on you, eheh ! </h4>";
    	document.getElementById("result").innerHTML=comment4;
    


    }
}