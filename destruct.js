//destructuring an object

const obj = { first: 'Jane', last: 'Doe' };
const {first: f, last: l} = obj;
    // f = 'Jane'; l = 'Doe'

// {prop} is short for {prop: prop}
const {first, last} = obj;
    // first = 'Jane'; last = 'Doe'

const obj = { foo: 123 };

const {writable, configurable} =
 Object.getOwnPropertyDescriptor(obj, 'foo');


//Array Destructuring
const iterable = ['a', 'b'];
const [x, y] = iterable;
    // x = 'a'; y = 'b'

const [all, year, month, day] =/^(\d\d\d\d)-(\d\d)-(\d\d)$/
   .exec('2999-12-31');    