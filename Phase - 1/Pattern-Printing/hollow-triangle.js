function hollowTriangle(side) {
  let starString = "";
  for (let i = 1; i <= side; i++) {
    if (i !== side) {
      for (let j = 1; j <= i; j++) {
        if (j == 1 || j == i) {
          starString += "*";
        } else {
          starString += " ";
        }
      }
    } else {
      for (let j = 1; j <= side; j++) {
        starString += "*";
      }
    }
    starString += "\n";
  }
  console.log(starString);
}

hollowTriangle(8);
