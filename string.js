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
const str = String.raw`Not a newline: \n`;
console.log(str === 'Not a newline: \\n'); // true