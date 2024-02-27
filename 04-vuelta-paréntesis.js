function decode(message) {
  let stack = [];
    for (let char of message) {
        if (char === ')') {
            let reversed = '';
            while (stack.length && stack[stack.length - 1] !== '(') {
                reversed += stack.pop();
            }
            stack.pop();
            for (let reversedChar of reversed) {
                stack.push(reversedChar);
            }
        } else {
            stack.push(char);
        }
    }
    return stack.join('');
}