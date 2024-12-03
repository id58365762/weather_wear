	var temp = prompt("Enter the temp from outside");
	var sky = prompt("tell us what it is like outside put ether sun, rain, snow (it is case sensitive so follow orders.)");



	function getHot(temp) {
		if (temp >= 100) {
		alert("Bet u wish you could go naked but shorts and T-shirt will do.");
		}
		else if (temp >= 60) {
		alert("Ok thats a bit better but i would say shorts and T-shirt would be good.")
		}
		else if (temp >= 40){
		alert("Getting a bit nippy out maybe get some pants and a jacket.")
		}
		else if (temp >= 0){
		alert("Sucks to be you right now put on you big boy pants get a sweater and put a heavy coat on.")
		}
		else if (temp <= -1){
		alert("Stay inside you fool theres no need to freeze to death.")
		}
		else {
		alert("you mess with me i mess with you refresh to do this right.")
		}
		}
	function getLight(sky) {
	if (sky == "sun"){
	alert("Enjoy the light get out your house it's good for you inless it's to hot or to cold then hide from the light.")
	}
	else if (sky == "rain"){
	alert("Can't beleave you have to ask this but get a umbrella and maybe a poncho.")
	}
	else if (sky = "snow"){
	alert("If you are afraid of getting wet then use a umbrella other then that bundle up.")
	}
	else {
	alert("not going to tell you again follow what i say refresh and do it again.")
	}
	}
	
	getHot(temp);
	getLight(sky);