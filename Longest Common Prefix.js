function longestCommonPrefix(strs) {
    if (!strs.length) return "";

    // Sort the array to bring similar prefixes together
    strs.sort();
    
    let first = strs[0];
    let last = strs[strs.length - 1];
    let i = 0;

    // Compare characters of the first and last string
    while (i < first.length && i < last.length && first[i] === last[i]) {
        i++;
    }

    return first.substring(0, i);
}

