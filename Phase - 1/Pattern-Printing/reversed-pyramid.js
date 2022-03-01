function reversedPyramid(side) {
  let starString = "";
  for (let i = 1; i <= side; i++) {
    for (let j = 1; j <= i - 1; j++) {
      starString += " ";
    }
    for (let k = 1; k <= 2 * (side - i) + 1; k++) {
      starString += "*";
    }
    starString += "\n";
  }
  console.log(starString);
}

reversedPyramid(5);
