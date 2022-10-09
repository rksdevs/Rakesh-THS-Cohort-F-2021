let str = "06:40:03AM";
let miltaryTime = "";
let hh = "";
let newT = str.slice(0, str.length - 2);
let newerT = newT.split(":");
if (str[str.length - 2] == "P") {
  //   console.log(newerT);
  if (newerT[0] === "12") {
    hh = "12";
  } else if (Number(newerT[0]) < 12) {
    hh = Number(newerT[0]) + 12;
    // Number(newerT[0]) < 10
    //   ? (hh = "0" + Number(newerT[0])+12)
    //   : (hh = "" + Number(newerT[0]));
  } else {
    console.log("Can not convert, please enter valid time");
  }
} else if (str[str.length - 2] == "A") {
  if (newerT[0] === "12") {
    hh = "00";
  } else if (Number(newerT[0]) < 12) {
    Number(newerT[0]) < 10
      ? (hh = "0" + Number(newerT[0]))
      : (hh = "" + Number(newerT[0]));

    // hh = Number(newerT[0]);
  } else {
    console.log("Can not convert, please enter valid time");
  }
}
console.log(hh + ":" + newerT[1] + ":" + newerT[2]);
