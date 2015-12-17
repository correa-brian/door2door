function newGame() {
	var userInput = prompt("Do you want to play this game (Yes or No)").toUpperCase();
	if (userInput === "YES") {
		var playing = true; 
	}
	else if (userInput === "NO") {
		var playing = false;
		alert("Off with you then")
	}
	else {
		var playing = false;
		alert("Need to respond with a YES or NO")
	};

	while (playing) {
		var playing = false;
		var opponent = prompt("Great to have you board. You'll need to give your competitor a name");
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

			var numberPurchased = Profit1()/price1;
			var revenue = numberPurchased*price1;
			/* price/number = price per unit (ppu)
			number = price/ppu*/

			alert(neighbor1.name + " buys " + numberPurchased + "lbs. You make $" + revenue + ".");
			};

//firstStop complete

			var secondStop = function () {
			var neighbor2 = prompt("Give your second neighbor a name:");
			var neighbor2 =  new Neighbor(neighbor2);
			
			alert(neighbor2.name+ ": "+ "Hey, I'd like to buy hair, please.");
			
			var price2 = prompt("Name your price/lb");
			console.log(price2);
				if (isNaN(price2)) {
					alert("Need a number, dude");
					return;
				}
				else {
				};

			var neighbor2Response = neighbor2.randomResponse();
			alert(neighbor2.name+ ": $" + price2 + ", eh? " + neighbor2Response);

			var Profit2 = function() {
				if (neighbor2Response === "Is that all? I'll double down") {
					return(Math.floor((Math.random()*(20-10)+10))*price2);
				}
				else if (neighbor2Response === "Seems fair, I'll take the usual") {
					return(Math.floor((Math.random()*(10-5)+5))*price2);	
				}
				else {
					return(Math.floor((Math.random()*(5-1)+1))*price2);
				}
			};

			var numberPurchased = Profit2()/price2;
			var revenue = numberPurchased*price2;
			/* price/number = price per unit (ppu)
			number = price/ppu*/

			alert(neighbor2.name + " buys " + numberPurchased + " hairs. You make $" + revenue + ".");
		}

//secondStop complete

		var thirdStop = function() {
			var neighbor3 = prompt("Give your third and final neighbor a name:");
			var neighbor3 =  new Neighbor(neighbor3);
			
			alert(neighbor3.name+ ": "+ "Do you carry windchimes?");
			
			var price3 = prompt("What's a 'chime cost?");
			console.log(price3);
				if (isNaN(price3)) {
					alert("Need a number, dude");
					return;
				}
				else {
				};

			var neighbor3Response = neighbor3.randomResponse();
			alert(neighbor3.name+ ": $" + price3 + " dollars, hmmm..." + neighbor3Response);

			var Profit3 = function() {
				if (neighbor3Response === "Is that all? I'll double down") {
					return(Math.floor((Math.random()*(20-10)+10))*price3);
				}
				else if (neighbor3Response === "Seems fair, I'll take the usual") {
					return(Math.floor((Math.random()*(10-5)+5))*price3);	
				}
				else {
					return(Math.floor((Math.random()*(5-1)+1))*price3);
				}
			};

			var numberPurchased = Profit3()/price3;
			var revenue = numberPurchased*price3;
			/* price/number = price per unit (ppu)
			number = price/ppu*/

			alert(neighbor3.name + " buys " + numberPurchased + " 'chimes. You make $" + revenue + ".");
		};

/*		firstStop();
		secondStop();
		thirdStop();
*/
		var totalRevenue = firstStop() + secondStop()+ thirdStop();

		console.log(totalRevenue);
	};
};

newGame();
