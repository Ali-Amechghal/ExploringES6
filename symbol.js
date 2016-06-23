//Symbols are a new primitive type in ECMAScript 6.
const iterableObject = {
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