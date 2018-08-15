function x(n){
    let out = [];
    for (let i = 0; i < n; i++) {
      let str = "□".repeat(n).split("");
      str[i] = "■";
      str[n-i-1] = "■";
      out.push(str.join(""));
    }
    return out.join("\n");
  }