function countChar(str) {
    const charCount = {};

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    return charCount;
}


let result = countChar("aabccadeaac");
console.log(result);  
