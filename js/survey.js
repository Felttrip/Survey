function validate(){
//check all values
var max = 0;
jQuery('.slider').each(function() {
    var currentElement = $(this);
	if (currentElement.val() > max){
		max = currentElement.val();
	}
});
if(max!=10){
alert("Please set at least one value at a 10");
}
else{
alert("Submited!");
}

}