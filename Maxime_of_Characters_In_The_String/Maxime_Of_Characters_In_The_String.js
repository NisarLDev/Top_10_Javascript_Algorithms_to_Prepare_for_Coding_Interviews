function maxChar(str){
    const charMap = {};
    for(let char of str){
        if(charMap[char]){
            charMap[char] = charMap[char] + 1
        }else{let char:any
            charMap[char] = 1
        };
    };
    return charMap;
}

console.log(maxChar("abcccccccd"));