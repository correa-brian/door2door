function newGame() {
	var userInput = prompt("Follow the sound of my voice. Are you there? (yes or no)?").toUpperCase();
	if (userInput === "YES") {
		var playing = true; 
	}
	else if (userInput === "NO") {
		var playing = false;
		alert("Good-bye, old friend. Wander back to your chariot, lest your seat grow cold in the winter's dew.")
	}
	else {
		var playing = false;
		alert("Respond with a YES or NO.")
	};


	while (playing) {
		var playing = false;
		
		var opponent = prompt("Today we stand, borne against a murder thronging, to play the will of your once friend, whom you hate by the way.  \n\nDo you remember the name?:");
		var opponent = new Competitor(opponent);
		var playerName = prompt(opponent.name+ ": "+ "Laugh out loud. A duty to your pathetic existence I need not shirk. When you're here, you're family. \n\nFor goodness, state you name:");

		//first stop
	
		var neighbor1 = prompt("Those are fighting words if you ask me, " + playerName + "." + "\nNow that you've entered the danger zone and picked a villain for our fable, let's learn the rules to the game.\n\n1. The game is called Door2door\n2. You're a door2door salesman and your goal is to sell more groceries than"+ " "+ opponent.name+ "\n3. Give your first neighbor a name:");
		var neighbor1 =  new Neighbor(neighbor1);
			
		alert(neighbor1.name+ ": "+ "Hi there, I'm interested in buying some Chicken. Make me an offer.");
			
		var price1 = prompt("Name your price/lb in $ (just a number, no need for dollar signs):");
		console.log(price1);
			if (isNaN(price1)) {
				alert("Need a number, dude!");
				return;
			}
			else {
			};

		var neighbor1Response = neighbor1.randomResponse();
		alert(neighbor1.name+ ": $" + price1.toLocaleString() + ", eh? " + neighbor1Response);

		var Profit1 = function() {
			if (neighbor1Response === "Is that all? I'll double down") {
				return (Math.floor((Math.random()*(20-10)+10))*price1);
			}
			else if (neighbor1Response === "Seems fair, I'll take the usual") {
				return (Math.floor((Math.random()*(10-5)+5))*price1);	
			}
			else {
				return (Math.floor((Math.random()*(5-1)+1))*price1);
			}
		};

		var numberPurchased1 = Profit1()/price1;
		var revenue1 = numberPurchased1*price1;

		alert(neighbor1.name + " buys " + numberPurchased1.toLocaleString() + "lbs. You make $" + revenue1.toLocaleString() + ".");
			
		//second stop

		var neighbor2 = prompt("Give your second neighbor a name:");
		var neighbor2 =  new Neighbor(neighbor2);
			
		alert(neighbor2.name+ ": I'd like to buy hair, please.");
			
		var price2 = prompt("Name your price/lb:");
		console.log(price2);
		
			if (isNaN(price2)) {
				alert("Need a number, dude!");
				return;
			}
			else {
			};

		var neighbor2Response = neighbor2.randomResponse();
		alert(neighbor2.name+ ": $" + price2.toLocaleString() + ", eh? " + neighbor2Response);

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

		var numberPurchased2 = Profit2()/price2;
		var revenue2 = numberPurchased2*price2;

		alert(neighbor2.name + " buys " + numberPurchased2.toLocaleString() + " hairs. You make $" + revenue2.toLocaleString() + ".");

		//third stop

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
		alert(neighbor3.name+ ": $" + price3.toLocaleString() + " dollars, hmmm..." + neighbor3Response);

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

		var numberPurchased3 = Profit3()/price3;
		var revenue3 = numberPurchased3*price3;

		alert(neighbor3.name + " buys " + numberPurchased3.toLocaleString() + " 'chimes. You make $" + revenue3.toLocaleString() + ".");

		console.log(revenue1);
		console.log(revenue2);
		console.log(revenue3);

		var totalRevenue = revenue1 + revenue2 + revenue3;
		
		console.log(totalRevenue);

		var opponentRevenue = function () {
			var randomNum = Math.floor((Math.random() * 1000000000 - 1)+1);
			if (randomNum > totalRevenue){
				return "Looks like " + opponent.name + " beat you this time with $" + randomNum.toLocaleString() + " in cash - try again, you only made $" + totalRevenue.toLocaleString() + ".";
			}
			else if (randomNum < totalRevenue) {
				return "You won! " + opponent.name + " made $" + randomNum.toLocaleString() + " but you made $" + totalRevenue.toLocaleString() + ".";
			}
			else {
				return "Result is a tie  - $" + randomNum.toLocaleString() + " to $" + totalRevenue.toLocaleString() + "."
			}
		}

		alert(opponentRevenue())
	};
};

newGame();
