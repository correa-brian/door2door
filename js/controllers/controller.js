function newGame() {
	var userInput = prompt("Do you want to play this game (answer in CAPS?)");
	if (userInput === "YES") {
		var playing = true;
		alert("Alright, great to have you on board");	 
	}
	else if (userInput === "NO") {
		var playing = false;
		alert("Off with you then")
	}
	else {
		alert("Need to respond with a YES or NO")
	};

	while (playing) {
		var playing = false;
		var opponent = prompt("You'll need to give your competitor a name");
		var opponent = new Competitor(opponent);
		alert(opponent.name+ ": "+ "I'm gonna kick your ass!");
	
		var firstStop = function() {
			var neighbor1 = prompt("Those are fighting words if you ask me.\nNow that you've entered the danger zone and picked a villain for our righteous fable, let's learn the rules to the game.\n\n1. The game is called Door2door\n2. You're a door2door salesman and your goal is to sell more groceries than"+ " "+ opponent.name+ "\n3. Give your first neighbor a name:");
			var neighbor1 =  new Neighbor(neighbor1);
			
			alert(neighbor1.name+ ": "+ "Hi there, I'm interested in buying some Chicken. Make me an offer.");
			
			var price1 = prompt("Name your price/lb in $ (just a number, no need for dollar signs)");
			console.log(price1);
				if (isNaN(price1)) {
					alert("Need a number, dude");
					return;
				}
				else {
				};

			var neighbor1Response = neighbor1.randomResponse();
			alert(neighbor1.name+ ": $" + price1 + ", eh? " + neighbor1Response);

			var Profit1 = function() {
				if (neighbor1Response === "Is that all? I'll double down") {
					return(Math.floor((Math.random()*(20-10)+10))*price1);
				}
				else if (neighbor1Response === "Seems fair, I'll take the usual") {
					return(Math.floor((Math.random()*(10-5)+5))*price1);	
				}
				else {
					return(Math.floor((Math.random()*(5-1)+1))*price1);
				}
			};

			alert("Looks like " + neighbor1.name + " wants to buy $" + Profit1() + " worth");
			};
		firstStop();
	};
};

newGame();
