(function() {
	var fbArr = [];
	for(var i = 1; i < 101; ++i) {
		var str = i + ": ";
		if(i % 3 == 0)
			str += "fizz"
		if(i % 5 == 0)
			str += "buzz"
		fbArr.push(str);
	}
	//console.log(fbArr);
	fbArr.forEach(function(e) {
		console.log(e);
	});
})();
