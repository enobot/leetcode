/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let paren = {
        '[' : ']', 
        '{' : '}', 
        '(' : ')'
    }

    let openStack = [];

    for (let i = 0;  i < s.length; i++) {
        if (s[i] === ']' || s[i] === '}' || s[i] === ')') {
            let top = openStack[openStack.length - 1];
            if (paren[top] !== s[i] ) return false;
            else openStack.pop();
        } else openStack.push(s[i]);

        console.log(openStack)
    }

    return openStack.length === 0;
};