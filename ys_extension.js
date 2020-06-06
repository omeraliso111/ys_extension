if(document.body.innerText.search("Show 100 rows") == -1){
	alert("Set row count to 100 at the bottom of the screen")
}
else{
	output = ""; 
	inputs = document.getElementsByTagName("a"); 
	for(var i = 0; i < inputs.length; i++){
		if(inputs[i].className.search("Fw\\(600\\)") != -1){
			output+= inputs[i].innerText + "\n";}
	} 
	alert(output);
}

