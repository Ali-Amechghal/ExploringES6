//Symbols are a new primitive type in ECMAScript 6.
const iterableObject = {
    // foxinalty nt upote b l bowsr
    [Symbol.iterator]() { // (A)
        const data = ['hello', 'world'];
        let index = 0;
        return {
            next() {
                if (index < data.length) {
                    return { value: data[index++] };
                } else {
                    return { done: true };
                }
            }
        };
    }
}
for (const x of iterableObject) {
    console.log(x);
}
// Output:
// hello
// world


//use sympbols in switch

const COLOR_RED    = Symbol('Red');
const COLOR_ORANGE = Symbol('Orange');
const COLOR_YELLOW = Symbol('Yellow');
const COLOR_GREEN  = Symbol('Green');
const COLOR_BLUE   = Symbol('Blue');
const COLOR_VIOLET = Symbol('Violet');
//get clr componeñt by coĺor stŕiñg
function getComplement(color) {
    switch (color) {
        case COLOR_RED:
            return COLOR_GREEN;
        case COLOR_ORANGE:
            return COLOR_BLUE;
        case COLOR_YELLOW:
            return COLOR_VIOLET;
        case COLOR_GREEN:
            return COLOR_RED;
        case COLOR_BLUE:
            return COLOR_ORANGE;
        case COLOR_VIOLET:
            return COLOR_YELLOW;
        default:
            throw new Exception('Unknown color: '+color);
    }
}

//parsing JSON

const REGEX_SYMBOL_STRING = /^@@(.*)@@$/;
function symbolReviver(key, value) {
    if (typeof value === 'string') {
        const match = REGEX_SYMBOL_STRING.exec(value);
        if (match) {
            const symbolKey = match[1];
            return Symbol.for(symbolKey);
        }
    }
    return value;
}

const parsed = JSON.parse(str, symbolReviver);
console.log(parse);

