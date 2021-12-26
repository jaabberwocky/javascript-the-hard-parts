const stupidFunc = (a, b) => {
  stupidFunc2();
  return a + b;
};

const stupidFunc2 = () => {
    let c = 4;
}

let val = stupidFunc(1,2);