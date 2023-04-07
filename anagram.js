function isAnagram(s1, s2) {
  //
  if (s1.length !== s2.length) {
    //
    // console.log("false");
    return false;
  } else {
    //
    let str1 = s1.toLowerCase().split("").sort().join("");
    let str2 = s2.toLowerCase().split("").sort().join("");

    // console.log(str1, str2);

    if (str1 === str2) {
      //   console.log("true");
      return true;
    } else {
      //   console.log("fasle");
      return false;
    }
  }
}

isAnagram("Spe ed 123!@& ", " e23 1&sD e@p!"); // true
isAnagram("Silent", "Listen"); //true
