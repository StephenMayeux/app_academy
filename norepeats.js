/* Write a function, `no_repeats(year_start, year_end)`, which takes a
 range of years and outputs those years which do not have any
 repeated digits.

 You should probably write a helper function, `no_repeat?(year)` which
 returns true/false if a single year doesn't have a repeat.

 Difficulty: 1/5 */

 function noRepeats(start, end) {
	var years = [];
	for (var x = start; x <= end; x++) {
		if(!repeatCheck(x)) {
			years.push(x);
		}
	}
	return years;
}

function repeatCheck(number) {
	var str = number.toString();
	for (var x = 0; x < str.length-1; x++) {
		for (var y = x+1; y < str.length; y++) {
			if (str[x] === str[y]) {
				return true;
			}
		}
	}
	return false;
}

noRepeats(1980, 1985);
