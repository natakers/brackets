module.exports = function check(str, bracketsConfig) {
	var a = str.split('');
	var b = [];
	const op_brack = ["(", '[', "{"];
	const brackets = {
		[')'] : "(",
		[']'] : "[",
		['}'] : "{",

	}
	console.log(str);
	for (var i = 0; i <str.length; i++) {
		if (op_brack.includes(str[i])) {
			b.push(str[i]);
			// console.log(b);
		}
		else {
			if (b.length === 0) {
				return false;
			}
		
			var c = b[b.length-1];
			// console.log(b.length);
			if (brackets[str[i]] === c) {
				b.pop();
				// console.log(b);
			}
			else {
				return false;
			}
		}
	}
	console.log(b);
	return b.length === 0;

  // your solution
}
