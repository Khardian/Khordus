function input(k){
	var input = prompt();
	if (input != "") {
		k.innerHTML=input;
	}
	else{
		k.innerHTML="Insert your credit card info";
	}
}
function insert(nom){
	document.getElementById('warea').innerHTML = nom;
}
function mOver(x){
	x.style.backgroundColor ="#4a69aa";
}
function mOut(x){
	x.style.backgroundColor ="#446699";
}
