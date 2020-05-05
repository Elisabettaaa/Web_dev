function sayHELLO () {
	var comment= document.getElementById("button").value;
	var comment2=" <h4>Thanks for your feedback : " + comment +"</h4>";



    //document.getElementById("result").textContent=comment2;

    document.getElementById("result").innerHTML=comment2;

}