(function() {
	for(var i = 1; i < 101; ++i) {
		str = i + ": ";
		if(i % 3 == 0)
			str += "fizz"
		if(i % 5 == 0)
			str += "buzz"
		console.log(str);
	}
})();