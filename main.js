(function() {
	var fs = require('fs');
	var fbArr = [];

	fs.readFile("fizzbuzz.txt", "utf8", function(err, data) {
		if(err !== null)
			generateFBData();
		else {
			console.log("Fetched array")
			fbArr = JSON.parse(data);
			writeFBData();
		}
	});

	function generateFBData() {
		console.log("Building array...")
		for(var i = 1; i < 101; ++i) {
			var str = i + ": ";
			if(i % 3 == 0)
				str += "fizz"
			if(i % 5 == 0)
				str += "buzz"
			fbArr.push(str);
		}
		writeFBData();
	}

	function writeFBData() {
		fs.writeFile("fizzbuzz.txt", JSON.stringify(fbArr), "utf8", function(err) {
			if(err !== null)
				console.log('ERROR: ' + err);
		});
	}
})();
