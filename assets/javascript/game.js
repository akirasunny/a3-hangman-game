// global variables

var list = ["plum", "orchid", "bamboo", "chrysanthemum", "lotus", "peony", "reed"]; //梅兰竹菊，莲，牡丹，芦苇
var index = Math.floor(Math.random() * list.length);
var computerchoice = list[index];
var chances = Math.floor(computerchoice.length * 2);
document.getElementById("guesses").textContent = chances;

var userinput = [];
var underscore = "_ ";
var space = " ";
var placeholder = underscore.repeat(computerchoice.length);
var concatenator = space.repeat(computerchoice.length);
var keycode;
document.getElementById("dash").textContent = placeholder;

document.onkeyup = function(event) {
	keycode = event.keyCode;
	if (keycode > 64 && keycode < 91) {
		chances -= 1;
		userinput.push(" " + event.key);
		console.log(userinput);
		for (i = 0; i < computerchoice.length; i++) { // checking if input matches any letter in computer's choice
			if (event.key === computerchoice[i] && placeholder[i * 2] === "_") {
				placeholder = placeholder.substring(0, i * 2) + computerchoice[i] + placeholder.substring(i * 2 + 1, );
				concatenator = concatenator.substring(0, i) + computerchoice[i] + concatenator.substring(i + 1, );
			}
		}

		// page update
		document.getElementById("dash").textContent = placeholder;
		document.getElementById("input").textContent = userinput;
		document.getElementById("guesses").textContent = chances;

		if (chances >= 0 && concatenator === computerchoice) {
			var win = "<br>You win!<br>"
			+ "<br><button type='button' onclick='window.location.reload()'>Have Fun Again</button>"
			+ "<br><br>";
			document.getElementById("popout").innerHTML = win;
		}

		else if (chances <= 0 && concatenator !== computerchoice) {
			var lose = "<br>No available guess now, try again...<br>"
			+ "<br><button type='button' onclick='window.location.reload()'>Try Again</button>"
			+ "<br><br>";
			document.getElementById("popout").innerHTML = lose;
		}

	} // Only work before this bracket!!
}