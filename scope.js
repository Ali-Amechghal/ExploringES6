function func() {
    if (true) {
        const tmp = 123;
    }
    console.log(tmp); // ReferenceError: tmp is not defined
}
//In contrast, var-declared variables are function-scoped:

function func() {
    if (true) {
        var tmp = 123;
    }
    console.log(tmp); // 123
}
//Block scoping means that you can shadow variables within a function:

function func() {
  const foo = 5;
  if (···) {
     const foo = 10; // shadows outer `foo`
     console.log(foo); // 10
  }
  console.log(foo); // 5
}
