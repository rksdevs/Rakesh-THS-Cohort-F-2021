function downwardTriangle(side) {
  let starString = "";
  for (let i = 1; i <= side; i++) {
    for (let j = i; j <= side; j++) {
      starString += "*";
    }
    starString += "\n";
  }
  console.log(starString);
}

downwardTriangle(5);
