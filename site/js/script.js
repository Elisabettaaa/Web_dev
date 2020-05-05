function sayHELLO () {
	var comment= document.getElementById("button").value;
	var comment2=" <h4>Thanks a lot for your feedback : " + comment +" We are happy that you appreciated iy </h4>";



    //document.getElementById("result").textContent=comment2;
    //document.querySelector("#result").textContent=comment2;
    

    if ( comment >5 ){

    		document.getElementById("result").innerHTML=comment2;
    }
   
    else {
    	var comment3=" <h4>Thanks for your feedback : " + comment +" We are sossry that we have disappointed you, we will kepp improving, hoping to increase your score ! </h4>";
    	document.getElementById("result").innerHTML=comment3;
    

    }
}