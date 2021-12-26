function outer() {
    let counter = 0;
    const incrementCounter = () => {
        counter++;
    };
    incrementCounter();
    console.log(counter);
}
outer();

function outer2() {
    let counter = 0;
    incrementCounter2();
    console.log(counter);
}

function incrementCounter2() {
    counter++;
}
// throws error: counter is not defined
// outer2();

function outer3() {
    let counter = 0;
    const incrementCounter = () => {
        if (counter < 2) {
            counter++;
            console.log(counter);
        } else {
            console.log(`Counter: ${counter}. Ran too many times`);
        }
    };
    return incrementCounter;
}
console.log("myNewFunction:");
myNewFunction = outer3();
myNewFunction();
myNewFunction();
myNewFunction();
