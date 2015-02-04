var fs = require('fs');

var lists = ['reference', 'test'];

lists.forEach(function(elm, idx, arr) {

	console.log('Creating ' + elm + '.json');

	var data = fs.readdirSync('visual-regression-test/imgs-' + elm);
	var finalData = [];

	data.forEach(function(elm, idx, arr) {
		var patt = /\.png$/;
		if (patt.test(elm)) {
			finalData.push(elm);
		}
	});

	fs.writeFileSync('visual-regression-test/' + elm + '.json', JSON.stringify(finalData));
});
