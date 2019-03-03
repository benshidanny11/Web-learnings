var button=document.querySelector("button");
var number=document.getElementById("txt_number").value;

button.addEventListener("click",function() {
	alert("Number is"+number);
	document.getElementById('type').value="Hello danny";
/*if (number%2===0) {

}
else
{
	document.getElementById('type').value="Number is odd";
}*/
});

