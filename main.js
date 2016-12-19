(function() {
	var fs = require('fs');

	fs.readFile("fizzbuzz.txt", "utf8", function(err, data) {
		if(err !== null)
			generateFBData(writeFBData);
		else {
			console.log("Fetched array");
			console.log(JSON.parse(data));
		}
	});

	function generateFBData(callback) {
		console.log("Building array...");
		var tmpArr = [];
		for(var i = 1; i < 101; ++i) {
			var str = i + ": ";
			if(i % 3 == 0)
				str += "fizz"
			if(i % 5 == 0)
				str += "buzz"
			tmpArr.push(str);
		}
		console.log(tmpArr);
		callback(tmpArr);
	}

	function writeFBData(arr) {
		fs.writeFile("fizzbuzz.txt", JSON.stringify(arr), "utf8", function(err) {
			if(err !== null)
				console.log('ERROR: ' + err);
		});
	}
})();
