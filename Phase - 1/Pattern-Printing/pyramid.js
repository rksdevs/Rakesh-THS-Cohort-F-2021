function hollowTriangle(side) {
  let starString = "";
  for (let i = 1; i <= side; i++) {
    for (let j = 1; j <= i; j++) {
      if (i === side) {
        starString += "*";
      } else if (j == 1 || j == i) {
        starString += "*";
      } else {
        starString += " ";
      }
    }
    starString += "\n";
  }
  console.log(starString);
}

hollowTriangle(8);
