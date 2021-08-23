module.exports = function check(str, bracketsConfig) {
	var a = str.split('');
	var b = [];
	const op_brack = ["(", '[', "{", "|", "1", "3", "5", "7", "8"];
	const brackets = {
		[')'] : "(",
		[']'] : "[",
		['}'] : "{",
		['|'] : "|",
		["2"] : "1",
		['3'] : "4",
		["6"] : "5",
		['7'] : "7",
		['8'] : "8",

	}
	console.log(str);
	console.log("str0 " + str[0]);
	// if (!op_brack.includes(str[0]) || str[0] === 1) { console.log("str " + str[0]); return false;}
	for (var i = 0; i <str.length; i++) {
		// if (str[i] == "|") {return true;}
// console.log("str[i] " + str[i]);
		
		if (op_brack.includes(str[i])) {

			// console.log("str[i] " + str[i]);
			b.push(str[i]);
			console.log("b push " + b);
			// console.log("i " + i);
			// console.log("b[i] " + b[i]);
			// console.log("b[i-1] " + b[i-1]);
		if ((b[b.length-1] == "|" && b[b.length-1-1] == "|") || (b[b.length-1] == "7" && b[b.length-1-1] == "7")  || (b[b.length-1] == "8" && b[b.length-1-1] == "8") )  {
			console.log("b " + b);
			console.log('brackets[str[i]] ' + brackets[str[i]]);
			b.pop();
			b.pop();
			// console.log("b pop" + b);
		}
			
		}
		else {
			if (b.length === 0) {
				console.log('b length = 0' + b);
				return false;
			}
		
			var c = b[b.length-1];
			console.log('str[i] ' + str[i]);
			console.log('brackets[str[i]] ' + brackets[str[i]]);
			console.log("c " + c);
			// console.log("i" + i + "i% " +  (b.length-1)%2);
			// console.log("length " + (b.length));
			if (brackets[str[i]] == c) {
				
				b.pop();
				console.log(b);
			}
			else {
				console.log("nen " + b);
				return false;
			}
		}
	}
	console.log(b);
	return b.length === 0;

  // your solution
}
