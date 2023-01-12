// blue: 96, 108, 89
// red: 88, 91, 110

const blue = [96, 108, 89];
const red = [88, 91, 110];

function average(arr) {
  let res = 0;
  arr.forEach((e) => {
    res += e;
  });
  return res;
}

blueAverage = average(blue);
redAverage = average(red);

console.log(`Blue: ${blueAverage}`);
console.log(`Red: ${redAverage}`);

if (blueAverage > redAverage) console.log("Blue won over Red");
else if (redAverage > blueAverage) console.log("Red won over Blue");
else console.log("Draw");

if (blueAverage >= 100) console.log("Blue Won!");
else if (redAverage >= 100) console.log("Red Won!");
else console.log("Draw");
