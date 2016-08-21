const tmpl = addrs => html`
    <table>
    ${addrs.map(addr => html`
        <tr><td>$${addr.first}</td></tr>
        <tr><td>$${addr.last}</td></tr>
    `)}
    </table>
`;
const data = [
    { first: '<Jane>', last: 'Bond' },
    { first: 'Lars', last: '<Croft>' },
];
console.log(tmpl(data));
// Output:
// <table>
//     <tr><td>&lt;Jane&gt;</td></tr>
//     <tr><td>Bond</td></tr>
//
//     <tr><td>Lars</td></tr>
//     <tr><td>&lt;Croft&gt;</td></tr>
// </table>

function html(templateObject, ...substs) {
    // Use raw template strings: we don’t want
    // backslashes (\n etc.) to be interpreted
    const raw = templateObject.raw;

    let result = '';

    substs.forEach((subst, i) => {
        // Retrieve the template string preceding
        // the current substitution
        let lit = raw[i];
        // In the example, map() returns an Array:
        // If substitution is an Array (and not a string),
        // we turn it into a string
        if (Array.isArray(subst)) {
            subst = subst.join('');
        }

        // If the substitution is preceded by a dollar sign,
        // we escape special characters in it
        if (lit.endsWith('$')) {
            subst = htmlEscape(subst);
            lit = lit.slice(0, -1);
        }
        result += lit;
        result += subst;
    });
    // Take care of last template string
    // (Never fails, because an empty tagged template
    // produces one template string, an empty string)
    result += raw[raw.length-1]; // (A)

    return result;
}

const INTEGER = /\d+/;
const decimalPoint = '.'; // locale-specific! E.g. ',' in Germany
const NUMBER = regex`${INTEGER}(${decimalPoint}${INTEGER})?`;
regex looks like this:

function regex(tmplObj, ...substs) {
    // Static text: verbatim
    let regexText = tmplObj.raw[0];
    for ([i, subst] of substs.entries()) {
        if (subst instanceof RegExp) {
            // Dynamic regular expressions: verbatim
            regexText += String(subst);
        } else {
            // Other dynamic data: escaped
            regexText += quoteText(String(subst));
        }
        // Static text: verbatim
        regexText += tmplObj.raw[i+1];
    }
    return new RegExp(regexText);
}
function quoteText(text) {
    return text.replace(/[\\^$.*+?()[\]{}|=!<>:-]/g, '\\$&');
}
