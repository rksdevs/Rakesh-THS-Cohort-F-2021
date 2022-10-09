function lonelyinteger(a) {
  // Write your code here

  let dictionary = {};
  for (let item of a) {
    dictionary.item ? ++dictionary[item] : (dictionary[item] = 1);
  }

  dictionary.forEach((item) => {
    if (dictionary[item] === 1) return item;
  });
}
