var fs = require('fs');

var lists = ['reference', 'test'];

lists.forEach(function(elm, idx, arr) {

	console.log('Creating ' + elm + '.json');

	var data = JSON.stringify(fs.readdirSync('visual-regression-test/imgs-' + elm));
	fs.writeFileSync('visual-regression-test/' + elm + '.json', data);
});
