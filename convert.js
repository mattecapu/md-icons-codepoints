var fs = require('fs');

var codepoints = fs.readFileSync('codepoints.txt', 'utf-8');
var pjos = {};

codepoints.split("\n")
	.map((line) => line.split(' '))
	.slice(0, -1) // last line is empty
	.forEach((pair) =>
		// <name>: <unicode char>
		pjos[pair[0]] = String.fromCodePoint(parseInt(pair[1], 16))
	);

fs.writeFileSync(
	'codepoints.json',
	JSON.stringify(pjos),
	'utf-8'
);
