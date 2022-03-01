function hollowSquare(side) {
  let starString = "";
  if (side == 0 || side == 1) {
    console.log("side needs to be bigger than 1");
  } else {
    for (let i = 1; i <= side; i++) {
      if (i == 1 || i == side) {
        for (let j = 1; j <= side; j++) {
          starString += "*";
        }
      } else {
        for (let j = 1; j <= side; j++) {
          if (j == 1 || j == side) {
            starString += "*";
          } else {
            starString += " ";
          }
        }
      }
      starString += "\n";
    }
  }

  console.log(starString);
}

hollowSquare(5);
