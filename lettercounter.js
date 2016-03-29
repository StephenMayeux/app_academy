/*
# Write a function, `letter_count(str)` that takes a string and
# returns a hash mapping each letter to its frequency. Do not include
# spaces.
#
# Difficulty: 1/5
*/

function letterCount(str) {
	var result = {};
	var sortedResult = {};
	var words = str.split(' ');

	words.forEach(function(item) {
		for (var x = 0; x < item.length; x++) {
			if (!result.hasOwnProperty(item[x])) {
				result[item[x]] = 1;
			} else {
				result[item[x]]++;
			}
		}
	});

	Object.keys(result).sort().forEach(function(item) {
		sortedResult[item] = result[item];
	});

	return sortedResult;
}

letterCount('mississippi');
