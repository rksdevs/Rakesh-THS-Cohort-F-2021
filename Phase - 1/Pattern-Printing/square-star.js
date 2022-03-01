function squareStar(row, col) {
  let starString = "";
  for (let i = 1; i <= row; i++) {
    for (let j = 1; j <= col; j++) {
      starString += "* ";
    }
    starString += "\n";
  }
  console.log(starString);
}

squareStar(5, 5);
