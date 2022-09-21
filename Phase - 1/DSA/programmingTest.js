let x = 78612378;
let y = 127919731098093;

var result = 1;
const count = (x) => {
  if (x / 10 > 1) {
    num = Math.floor(x / 10);
    result++;
    count(num);
  } else {
    return 1;
  }
  return result;
};

console.log(count(x));
