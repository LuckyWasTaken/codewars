// https://www.codewars.com/kata/strip-comments/

function solution(input, markers){
    const rxs = markers
      .map((marker) => (["$", "^", "?", "*"]).indexOf(marker) !== -1 ? ("\\" + marker) : marker)
      .reduce((acc,val,i) => acc + val + ((i !== markers.length-1) ? "|" : ""),"");
    const rx = new RegExp(`\\s+(${rxs}).+`,"gm");
    return input.replace(rx, "");
}