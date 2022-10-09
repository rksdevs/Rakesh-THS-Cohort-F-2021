function lonelyinteger(a) {
  // Write your code here

  let dictionary = {};
  for (let item of a) {
    // dictionary.item = 1 || ++ dictionary[item];
    if (dictionary[item]) {
      dictionary[item] = ++dictionary[item];
    } else {
      dictionary[item] = 1;
    }
  }

  for (let item in dictionary) {
    if (dictionary[item] === 1) return item;
  }
  //   console.log(dictionary);
}

console.log(lonelyinteger([1, 2, 3, 4, 3, 2, 1]));
