function contactForm(){
   var inputs = document.getElementsByTagName("input");
	 for(var i = 0; i < inputs.length-1; i++)
   {
     if(inputs[i].value==("")){
        alert("Please enter a value for the required field " + inputs[i].name);
        return false;
     }
     if(inputs[i].name==("Email")&&(!inputs[i].value.includes("@")||
                                    !inputs[i].value.includes(".")||
                                    inputs[i].value.charAt(0) == "@"||
                                    inputs[i].value.charAt(0) == "."||
                                    inputs[i].value.charAt(inputs[i].value.length-1) == "@"||
                                    inputs[i].value.charAt(inputs[i].value.length-1) == ".")){
        alert("Please enter a valid email.");
        return false;
     }
	 }
   var affair = document.getElementsByTagName("textarea");
   if(affair[0].value==("")){
     alert("Please enter your reason for contact.");
     return false;
   }
   alert("The contact inquiry has been recorded! I will reply ASAP!");
   return true;
}
