(function() {
	var fs = require('fs');
	var fbArr = [];
	for(var i = 1; i < 101; ++i) {
		var str = i + ": ";
		if(i % 3 == 0)
			str += "fizz"
		if(i % 5 == 0)
			str += "buzz"
		fbArr.push(str);
	}
	fs.writeFile("fizzbuzz.txt", fbArr, "utf8", function(err) {
		if(err !== null)
			console.log('ERROR: ' + err);
	});
})();
