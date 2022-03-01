function leftTriangle(side) {
  let starString = "";
  for (let i = 1; i <= side; i++) {
    for (let j = 1; j <= i; j++) {
      starString += "*";
    }
    starString += "\n";
  }
  console.log(starString);
}

leftTriangle(5);
