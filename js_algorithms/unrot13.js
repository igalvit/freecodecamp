function unrot13(str) {
    const shifted = 'NOPQRSTUVWXYZABCDEFGHIJKLM';
    const normal = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const position = letter => shifted.indexOf(letter);
    const translate = letter => position(letter) > -1 ? normal[position(letter)]: letter
    return str.split('').map(translate).join('');
  }