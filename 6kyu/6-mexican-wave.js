// https://www.codewars.com/kata/mexican-wave/

function wave(str){
    const out = [];
    for (let i = 0; i < str.length; i++) {
        if(str[i] !== " ") {
            out.push(`${str.substr(0,i)}${str[i].toUpperCase()}${str.substr(i+1)}`);
        }
    }
    return out
}