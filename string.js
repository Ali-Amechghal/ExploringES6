// nes ES6 string methods:

'javascript'.startsWith('java'); //true
'javascript'.endsWith('script'); //true
'javascript'.includes('asc'); //true

//literal tempalte

const first_name='Ali';
const last_name='Amechghal';
console.log(`first name : ${first_name} ,  last name : ${last_name}`);

//string with multi-lines
const HTML_DIV=`<div>
<i> title </i>
</div>`;

// Third, template literals are “raw” if you prefix them with the tag String.raw 
// – the backslash is not a special character and escapes such as \n are not interpreted:
const str_const = String.raw`Not a newline: \n`;
console.log(str_const === 'Not a newline: \\n'); // true

//create array from string , by splitting it
let str = 'JAVASCRIPT';
let str_array=[...str]; // equivalent to str.split('')
console.log(str_array); //[ 'J', 'A', 'V', 'A', 'S', 'C', 'R', 'I', 'P', 'T' ]

//loop through a string
for (char of str){
	console.log(char);
}