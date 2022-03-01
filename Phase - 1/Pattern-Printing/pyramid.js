function pyramid(side) {
  let starString = "";
  for (let i = 1; i <= side; i++) {
    for (let j = 1; j <= side - i; j++) {
      starString += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      starString += "*";
    }
    starString += "\n";
  }
  console.log(starString);
}

pyramid(5);
