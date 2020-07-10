/**
 *
 */
const palindromes = (strings) => {
    var re = /[^A-Za-z0-9]/g;
    strings = strings.toLowerCase().replace(re, '');
    for (var i = 0; i < strings.length/2; i++) {
      if (strings[i] !== strings[strings.length - 1 - i]) {
          return false;
      }
    }
    return true;

};

module.exports = palindromes;
