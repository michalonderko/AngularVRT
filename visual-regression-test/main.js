;
resemble.outputSettings({
	errorColor: {
		red: 102,
		green: 255,
		blue: 0
	},
	errorType: 'movement',
	transparency: 0.4,
	largeImageThreshold: 10000000
});

$(document).ready(function() {

	var REFFOLDER = 'screenshots-reference/';
	var TESTFOLDER = 'screenshots-test/';
	var LISTFILE = 'list.json';

	var refList = null;
	var testList = null;

	var extras = function(id, count, list) {
		$('#' + id).append([
			' ',
			count,
			'<ul>',
			list,
			'</ul>'
		].join(''));
	};

	var buildDiff = function(origImgName, diffImg) {
		$('#diffs').append('<h2>' + origImgName + '</h2>');
		$('#diffs').append('<ul><li><a href="' + REFFOLDER + origImgName + '" target="_blank">Reference version</a></li><li><a href="' + TESTFOLDER + origImgName + '" target="_blank">Test version</a></li></ul>');
		$('#diffs').append('<img src="' + diffImg + '">');
	};

	var checkoutDiffs = function(arr) {

		var testsCount = arr.length;

		$('#testedCount').text(testsCount);

		var passedCount = 0;
		var failedCount = 0;

		arr.forEach(function(elem, idx, arr) {
			resemble(REFFOLDER + elem)
				.compareTo(TESTFOLDER + elem)
				.ignoreNothing()
				.onComplete(function(data) {
					if (data.misMatchPercentage != 0.0) {
						buildDiff(elem, data.getImageDataUrl());
						failedCount++;
						$('#failedCount').text(failedCount);
					} else {
						passedCount++;
						$('#passedCount').text(passedCount);
					}

					if (testsCount == passedCount + failedCount) {
						$('.status .status--item').toggleClass('status--item__actual');
					}
				});
		});
	};

	var compareLists = function() {
		if (refList != null && testList != null) {
			
			var refExtrasCount = 0;
			var refExtras = '';
			var testExtrasCount = 0;
			var testExtras = '';
			var toCompare = [];

			refList.forEach(function(elem, idx, arr) {
				if (testList.indexOf(elem) === -1) {
					refExtras += '<li><a href="' + REFFOLDER + elem + '" target="_blank">' + elem + '</li>';
					refExtrasCount++;
				}
			});

			testList.forEach(function(elem, idx, arr) {
				if (refList.indexOf(elem) === -1) {
					testExtras += '<li><a href="' + TESTFOLDER + elem + '" target="_blank">' + elem + '</li>';
					testExtrasCount++;
				} else {
					toCompare.push(elem);
				}
			});


			extras('refExtras', refExtrasCount, refExtras);
			extras('testExtras', testExtrasCount, testExtras);
			
			checkoutDiffs(toCompare);
		}
	};

	var getLists = function(folder) {
		$.getJSON(folder + LISTFILE, function(data) {
			if (folder === REFFOLDER) {
				refList = data;	
			} else if (folder === TESTFOLDER) {
				testList = data;
			}
			compareLists();
		}).fail(function() {
			console.error('Nepodarilo se nacist soubor ' + folder + LISTFILE);
		});
	};

	getLists(REFFOLDER);
	getLists(TESTFOLDER);
});