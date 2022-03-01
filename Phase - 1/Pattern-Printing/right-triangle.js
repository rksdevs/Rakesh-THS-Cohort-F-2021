function rightTriangle(side) {
  let starString = "";
  for (let i = 1; i <= side; i++) {
    for (let j = 1; j <= side; j++) {
      if (j >= side - i + 1) {
        starString += "*";
      } else {
        starString += " ";
      }
    }
    starString += "\n";
  }
  console.log(starString);
}

rightTriangle(5);
