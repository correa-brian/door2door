function Neighbor(name) {
	this.name = name;
	this.responses = {
		cheap: "Is that all? I'll double down",
		fair: "Seems fair, I'll take the usual",
		expensive: "No way I'm paying that price!"
	};
}
/*(function() {
	this.randomResponse = function(){
		var randomNum = Math.floor((Math.random() * 3) +1);
		if (randomNum === 1) {
			return this.responses.cheap;
		}
		else if (randomNum === 2) {
			return this.responses.fair;
		}
		else {
			return this.responses.expensive;
		}
	};
}).call(Neighbor.prototype)
};*/

Neighbor.prototype.randomResponse = function() {
	var randomNum = Math.floor((Math.random() * 3) +1);
	if (randomNum === 1) {
		return this.responses.cheap;
	}
	else if (randomNum === 2) {
		return this.responses.fair;
	}
	else {
		return this.responses.expensive;
	}
}

/*Neighbor.prototype.Profit = function(price) {
	if neighbor.randomResponse()

}*/

var Competitor = function(name) {
	this.name = name;
}

/*var pocketCash = */